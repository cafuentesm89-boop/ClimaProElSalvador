# Setup Images script
import os
import shutil

src_dir = r"C:\Users\Admin\.gemini\antigravity\brain\ef000b87-395e-4cb0-b95f-ddb7a89a3731"
dest_dir = r"C:\Users\Admin\.gemini\antigravity\scratch\climapro\images"

os.makedirs(dest_dir, exist_ok=True)

files = [
    ("logo_1772340973820.png", "logo.png"),
    ("hero_visual_1772341009701.png", "hero_visual.png"),
    ("service_1_1772341030486.png", "service_1.png"),
    ("service_2_1772341051847.png", "service_2.png"),
    ("service_3_1772341065153.png", "service_3.png"),
    ("service_4_1772341077655.png", "service_4.png"),
]

for src_name, dest_name in files:
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied {src_name} to {dest_name}")
    else:
        print(f"File {src_name} not found")

# For missing files, fallbacks
if os.path.exists(os.path.join(dest_dir, "service_4.png")):
    shutil.copy2(os.path.join(dest_dir, "service_4.png"), os.path.join(dest_dir, "service_5.png"))
if os.path.exists(os.path.join(dest_dir, "service_1.png")):
    shutil.copy2(os.path.join(dest_dir, "service_1.png"), os.path.join(dest_dir, "service_6.png"))

print("Image setup step completed!")
