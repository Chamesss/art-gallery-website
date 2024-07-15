import os
import qrcode
from PIL import Image

def generate_qr_code(url, output_dir):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    os.makedirs(output_dir, exist_ok=True)
    filename = os.path.join(output_dir, f"{url.split('=')[1]}.png")
    img.save(filename)
    print(f"QR code saved: {filename}")

def generate_qr_codes_from_file(input_file, output_dir):
    with open(input_file, 'r') as file:
        for line in file:
            url = line.strip() 
            generate_qr_code(url, output_dir)

if __name__ == "__main__":
    input_file = 'result-model-one.txt'
    output_directory = 'result'

    generate_qr_codes_from_file(input_file, output_directory)
    print("All QR codes generated and saved in 'result' directory.")