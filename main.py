import os
import cv2
import numpy as np
import multiprocessing
from functools import partial
from paddleocr import PaddleOCR

def process_pdf(input_directory, output_directory, filename):
    if not filename.endswith('.pdf') or 'annotated' in filename.lower():
        return None

    pdf_path = os.path.join(input_directory, filename)
    output_filename = os.path.splitext(filename)[0] + '.txt'
    output_path = os.path.join(output_directory, output_filename)

    # Skip if already converted
    if os.path.exists(output_path):
        print(f"Skipped (already converted): {filename}")
        return None

    try:
        # Initialize OCR with GPU
        ocr = PaddleOCR(
            use_angle_cls=True,  # Detect text orientation
            lang='en',
            use_gpu=True  # Enable GPU acceleration
        )

        # Convert PDF to images
        from pdf2image import convert_from_path
        images = convert_from_path(pdf_path)
        
        full_text = []
        for page_num, image in enumerate(images, 1):
            # Convert to numpy array
            img_array = np.array(image)
            
            # Perform OCR
            results = ocr.ocr(img_array, cls=True)
            
            # Extract text from results
            page_text = '\n'.join([
                line[1][0]  # Extract the recognized text
                for result in results
                for line in result
            ])
            
            # Add page separator
            page_separator = (
                f"\n\n{'='*50}\n"
                f"{'PAGE ' + str(page_num):^50}\n"
                f"{'='*50}\n\n"
            )
            
            full_text.append(page_separator + page_text)

        # Write to file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write('\n\n'.join(full_text))
        
        print(f"Processed: {filename}")
        return filename

    except Exception as e:
        print(f"Error processing {filename}: {e}")
        return None

def extract_text_from_pdfs(input_directory, output_directory):
    os.makedirs(output_directory, exist_ok=True)
    
    # Get list of PDFs to process
    pdf_files = [
        f for f in os.listdir(input_directory) 
        if f.endswith('.pdf') and 
           'annotated' not in f.lower() and 
           os.path.splitext(f)[0] + '.txt' not in os.listdir(output_directory)
    ]
    
    # Parallel processing
    num_processes = max(1, multiprocessing.cpu_count() - 1)
    with multiprocessing.Pool(processes=num_processes) as pool:
        process_func = partial(process_pdf, input_directory, output_directory)
        pool.map(process_func, pdf_files)

# Usage
input_directory = 'downloaded_pdfs'
output_directory = 'ocr-ed_texts'
extract_text_from_pdfs(input_directory, output_directory)