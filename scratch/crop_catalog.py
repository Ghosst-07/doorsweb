from PIL import Image

def crop_catalog():
    img_path = "/Users/saad/.gemini/antigravity-ide/brain/0028d9ab-218b-4606-8494-7a69634ce7f0/media__1782197535249.jpg"
    img = Image.open(img_path)
    print("Catalog Image Size:", img.size) # Should be (682, 1024)

    # 01 Metal Door
    # Title bar is y: 375 to 403. Photo is y: 403 to 523. Description is y: 523 to 585.
    # Col 1: x: 10 to 166.
    metal_door_photo = img.crop((16, 403, 161, 523))
    metal_door_photo.save("/Users/saad/Developer/doorswebsite/public/catalog_metal_door.jpg")

    # 02 Steel Almirah
    # Col 2: x: 172 to 328
    steel_almirah_photo = img.crop((178, 403, 323, 523))
    steel_almirah_photo.save("/Users/saad/Developer/doorswebsite/public/catalog_steel_almirah.jpg")

    # 03 Cable Tray
    # Col 3: x: 334 to 490
    cable_tray_photo = img.crop((340, 403, 485, 523))
    cable_tray_photo.save("/Users/saad/Developer/doorswebsite/public/catalog_cable_tray.jpg")

    # 04 Laser Cutting
    # Col 4: x: 496 to 672
    laser_cutting_photo = img.crop((511, 403, 666, 523))
    laser_cutting_photo.save("/Users/saad/Developer/doorswebsite/public/catalog_laser_cutting.jpg")

    # Row 2: Bending Job Work, Truck Body Work, Work Trolley
    # Title is y: 590 to 618. Photo is y: 618 to 738. Description is y: 738 to 795.
    # 05 Bending
    # Col 1: x: 10 to 227
    bending_photo = img.crop((16, 618, 222, 738))
    bending_photo.save("/Users/saad/Developer/doorswebsite/public/catalog_bending.jpg")

    # 06 Truck Body
    # Col 2: x: 233 to 450
    truck_body_photo = img.crop((239, 618, 445, 738))
    truck_body_photo.save("/Users/saad/Developer/doorswebsite/public/catalog_truck_body.jpg")

    # 07 Work Trolley
    # Col 3: x: 456 to 672
    work_trolley_photo = img.crop((462, 618, 667, 738))
    work_trolley_photo.save("/Users/saad/Developer/doorswebsite/public/catalog_work_trolley.jpg")

    print("Cropped images saved successfully!")

if __name__ == "__main__":
    crop_catalog()
