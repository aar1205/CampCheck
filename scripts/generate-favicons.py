#!/usr/bin/env python3
"""
Favicon-Generator für CampCheck
Konvertiert icon.svg in verschiedene PNG-Größen

Benötigt: pip install cairosvg pillow
"""

import os
import sys
from pathlib import Path

def check_dependencies():
    """Prüft ob die benötigten Bibliotheken installiert sind"""
    missing = []
    
    try:
        import cairosvg
    except ImportError:
        missing.append("cairosvg")
    
    try:
        from PIL import Image
    except ImportError:
        missing.append("pillow")
    
    if missing:
        print("❌ Fehlende Abhängigkeiten:")
        print(f"   pip install {' '.join(missing)}")
        return False
    
    return True


def generate_favicons():
    """Generiert alle Favicon-Größen aus icon.svg"""
    
    if not check_dependencies():
        print("\n💡 Alternativ kannst du die Icons online konvertieren:")
        print("   https://favicon.io/favicon-converter/")
        sys.exit(1)
    
    from PIL import Image
    import cairosvg
    
    # Pfade
    base_dir = Path(__file__).parent.parent
    svg_path = base_dir / "public" / "icon.svg"
    public_dir = base_dir / "public"
    
    if not svg_path.exists():
        print(f"❌ SVG nicht gefunden: {svg_path}")
        sys.exit(1)
    
    print(f"🎨 Generiere Favicons aus: {svg_path}")
    
    # Größen die generiert werden sollen
    sizes = {
        "favicon-16x16.png": (16, 16),
        "favicon-32x32.png": (32, 32),
        "apple-touch-icon.png": (180, 180),
        "android-chrome-192x192.png": (192, 192),
        "android-chrome-512x512.png": (512, 512),
    }
    
    # Lese SVG
    with open(svg_path, "rb") as f:
        svg_data = f.read()
    
    generated = []
    
    for filename, (width, height) in sizes.items():
        output_path = public_dir / filename
        
        try:
            # Konvertiere SVG zu PNG
            png_data = cairosvg.svg2png(
                bytestring=svg_data,
                output_width=width,
                output_height=height
            )
            
            # Speichere PNG
            with open(output_path, "wb") as f:
                f.write(png_data)
            
            generated.append(filename)
            print(f"   ✅ {filename} ({width}x{height})")
            
        except Exception as e:
            print(f"   ❌ Fehler bei {filename}: {e}")
    
    print(f"\n🎉 {len(generated)} Favicons generiert!")
    print(f"📁 Gespeichert in: {public_dir}")
    
    # Lösche altes favicon.ico falls vorhanden (verursacht LLM-Probleme)
    old_ico = base_dir / "app" / "favicon.ico"
    if old_ico.exists():
        print(f"\n⚠️  Altes favicon.ico gefunden: {old_ico}")
        print("   Das alte .ico Format wird von LLMs nicht unterstützt.")
        print("   Es wird empfohlen, es zu löschen oder umzubenennen.")
        
        response = input("   Soll ich es löschen? (j/n): ")
        if response.lower() in ["j", "ja", "y", "yes"]:
            old_ico.rename(old_ico.with_suffix(".ico.backup"))
            print(f"   ✅ Umbenannt zu: favicon.ico.backup")


if __name__ == "__main__":
    generate_favicons()
