<#
.SYNOPSIS
    Converts the brand assets into web formats.

.DESCRIPTION
    The originals live in Google Drive as PNG and JPG. This script writes
    optimised files into public/ and never modifies anything under the source
    root.

    It is idempotent: a file is skipped when its output already exists and is
    newer than the source. Pass -Force to convert regardless.

.PARAMETER SourceRoot
    The Drive folder holding the brand assets. Override it if Drive moves.

.PARAMETER Force
    Reconvert files even when the output is already up to date.
#>

[CmdletBinding()]
param(
    [string]$SourceRoot = "G:\.shortcut-targets-by-id\1sEfiGFDikUFFItqMgTHnFJ98erSSZovE\Adrian\Phoebe O'Gorman (Marca)",
    [switch]$Force
)

$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$imagesOut = Join-Path $projectRoot "public\images"
$publicOut = Join-Path $projectRoot "public"

# Logos may land in the repository's references folder before they are
# uploaded to Drive. Both places are checked and the newer file wins.
$logoFallbackRoot = Join-Path (Split-Path -Parent $projectRoot) "references"

if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
    throw "ImageMagick is not on PATH. Install ImageMagick 7."
}

if (-not (Test-Path -LiteralPath $SourceRoot)) {
    throw "Source root not found: $SourceRoot"
}

New-Item -ItemType Directory -Path $imagesOut -Force | Out-Null

function Test-NeedsUpdate {
    param([string]$Source, [string]$Target)

    if ($Force) { return $true }
    if (-not (Test-Path -LiteralPath $Target)) { return $true }
    return (Get-Item -LiteralPath $Source).LastWriteTimeUtc -gt (Get-Item -LiteralPath $Target).LastWriteTimeUtc
}

# @() around the pipeline matters: with a single match Sort-Object returns a
# bare string, and indexing [0] into a string yields its first character
# rather than the path.
function Resolve-AssetSource {
    param([string]$FileName)

    $candidates = @(
        @(
            (Join-Path $SourceRoot $FileName),
            (Join-Path $logoFallbackRoot $FileName)
        ) | Where-Object { Test-Path -LiteralPath $_ }
    )

    if ($candidates.Count -eq 0) { return $null }

    return @($candidates | Sort-Object { (Get-Item -LiteralPath $_).LastWriteTimeUtc } -Descending)[0]
}

function Write-Resized {
    param([string]$Source, [string]$Target, [int]$Edge)

    if (-not (Test-NeedsUpdate -Source $Source -Target $Target)) {
        Write-Host ("  skip   {0}" -f (Split-Path $Target -Leaf)) -ForegroundColor DarkGray
        return
    }

    & magick "$Source" -auto-orient -resize "${Edge}x${Edge}" `
        -background none -quality 90 -strip "$Target"

    if ($LASTEXITCODE -ne 0) { throw "Conversion failed: $Source" }
    Write-Host ("  write  {0}  ({1} KB)" -f (Split-Path $Target -Leaf), [math]::Round((Get-Item -LiteralPath $Target).Length / 1KB, 1)) -ForegroundColor Green
}

# --- Favicon mark --------------------------------------------------------
# PhoebeIcon.png is the square greyscale emblem. It exists solely for
# favicons and app icons, where a square canvas is what platforms expect.
# The header keeps the horizontal wordmark.

Write-Host "Favicon mark" -ForegroundColor Cyan

$iconSource = Resolve-AssetSource "PhoebeIcon.png"
if ($iconSource) {
    foreach ($size in @(16, 32, 48, 180, 192, 512)) {
        $name = if ($size -eq 180) { "apple-touch-icon.png" } else { "favicon-$size.png" }
        Write-Resized -Source $iconSource -Target (Join-Path $publicOut $name) -Edge $size
    }

    # The source is opaque white. Favicons are shown on arbitrary backgrounds,
    # so white is made transparent: near-white pixels become see-through and
    # the grey line work stays.
    $ico = Join-Path $publicOut "favicon.ico"
    if (Test-NeedsUpdate -Source $iconSource -Target $ico) {
        # A multi-resolution .ico: Windows and some feed readers still ask for
        # 16 and 32 rather than the PNG variants above.
        & magick "$iconSource" -auto-orient -background none `
            "(" -clone 0 -resize 16x16 ")" `
            "(" -clone 0 -resize 32x32 ")" `
            "(" -clone 0 -resize 48x48 ")" `
            -delete 0 -strip "$ico"
        if ($LASTEXITCODE -ne 0) { throw "favicon.ico conversion failed" }
        Write-Host "  write  favicon.ico" -ForegroundColor Green
    }
} else {
    Write-Warning "  missing icon: PhoebeIcon.png"
}

# --- Wordmark logo -------------------------------------------------------
# PhoebeOGorman.png is a horizontal greyscale lockup for the site header.

Write-Host "Logo" -ForegroundColor Cyan

$logoSource = Resolve-AssetSource "PhoebeOGorman.png"
if ($logoSource) {
    # Header lockup, 78px painted height plus a retina copy.
    foreach ($height in @(156, 78)) {
        $suffix = if ($height -eq 78) { "" } else { "@2x" }
        Write-Resized -Source $logoSource -Target (Join-Path $imagesOut ("logo-phoebe-ogorman{0}.webp" -f $suffix)) -Edge $height
    }
} else {
    Write-Warning "  missing logo: PhoebeOGorman.png"
}

# --- Photography ---------------------------------------------------------
# Deferred on purpose. The site is a Coming Soon placeholder, so none of the
# editorial shots are referenced yet. When a photo is needed, add an entry
# here following the pattern above; keep outputs at most 2400px on the long
# edge at quality 82 so the repository stays small.

Write-Host ""
Write-Host "Done." -ForegroundColor Cyan

if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
    throw "ImageMagick is not on PATH. Install ImageMagick 7 with HEIC support."
}

if (-not (Test-Path -LiteralPath $SourceRoot)) {
    throw "Source root not found: $SourceRoot"
}

New-Item -ItemType Directory -Path $imagesOut -Force | Out-Null
