# Download curated images into ./public/images/
# Run from the frontend folder:
# powershell -ExecutionPolicy Bypass -File .\scripts\download-images.ps1

$dest = Join-Path -Path $PSScriptRoot -ChildPath "..\public\images"
if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest -Force | Out-Null }

$images = @(
    @{ url = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1400&q=80&auto=format&fit=crop"; out = "team-1.jpg"; credit = "Kenny Eliason / Unsplash" },
    @{ url = "https://images.unsplash.com/photo-1531123414780-f109e08535b7?w=1400&q=80&auto=format&fit=crop"; out = "team-2.jpg"; credit = "Priscilla Du Preez / Unsplash" },
    @{ url = "https://images.unsplash.com/photo-1545996124-2f7d0f9d5c3b?w=1400&q=80&auto=format&fit=crop"; out = "team-3.jpg"; credit = "Jenny Marvin / Unsplash" },
    @{ url = "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=1400&q=80&auto=format&fit=crop"; out = "team-4.jpg"; credit = "Sincerely Media / Unsplash" },

    # Client logo placeholders (generated)
    @{ url = "https://via.placeholder.com/320x120.png?text=Mandala"; out = "client-1.png"; credit = "Placeholder" },
    @{ url = "https://via.placeholder.com/320x120.png?text=FestivalX"; out = "client-2.png"; credit = "Placeholder" },
    @{ url = "https://via.placeholder.com/320x120.png?text=KTM+TV"; out = "client-3.png"; credit = "Placeholder" },
    @{ url = "https://via.placeholder.com/320x120.png?text=NepalDocs"; out = "client-4.png"; credit = "Placeholder" },
    @{ url = "https://via.placeholder.com/320x120.png?text=StudioA"; out = "client-5.png"; credit = "Placeholder" },
    @{ url = "https://via.placeholder.com/320x120.png?text=BrandCo"; out = "client-6.png"; credit = "Placeholder" },
    @{ url = "https://via.placeholder.com/320x120.png?text=EventWorks"; out = "client-7.png"; credit = "Placeholder" },
    @{ url = "https://via.placeholder.com/320x120.png?text=CinemaHouse"; out = "client-8.png"; credit = "Placeholder" }
)

foreach ($img in $images) {
    $u = $img.url
    $o = Join-Path $dest $img.out
    Write-Host "Downloading $u -> $o"
    try {
        Invoke-WebRequest -Uri $u -OutFile $o -UseBasicParsing -ErrorAction Stop
    } catch {
        Write-Warning "Failed to download $u : $_"
    }
}

Write-Host "Done. Images saved to $dest"
Write-Host "Note: Unsplash images are used under the Unsplash license. Photographer credits are listed in frontend/IMAGES.md."