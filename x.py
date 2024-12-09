import os
import pdfplumber
import multiprocessing
from functools import partial

def process_single_pdf(input_directory, output_directory, filename):
    # Skip files with 'annotated' in the name
    # Skip files already converted to text
    if (filename.endswith('.pdf') and 
        'annotated' not in filename.lower()):
        
        # Check if already converted
        output_filename = os.path.splitext(filename)[0] + '.txt'
        output_path = os.path.join(output_directory, output_filename)
        
        if os.path.exists(output_path):
            print(f"Skipped (already converted): {filename}")
            return None
        
        pdf_path = os.path.join(input_directory, filename)
        
        try:
            with pdfplumber.open(pdf_path) as pdf:
                text = ''
                for page_num, page in enumerate(pdf.pages, 1):
                    # Add a prominent page separator
                    page_separator = (
                        f"\n\n{'='*50}\n"
                        f"{'PAGE ' + str(page_num):^50}\n"
                        f"{'='*50}\n\n"
                    )
                    
                    # Extract text from the page
                    page_text = page.extract_text() or ''
                    
                    # Combine page separator and page text
                    text += page_separator + page_text + '\n\n'
                
                with open(output_path, 'w', encoding='utf-8') as output_file:
                    output_file.write(text.strip())
                
                print(f"Processed: {filename}")
                return filename
        
        except Exception as e:
            print(f"Error processing {filename}: {e}")
            return None

def extract_text_from_pdfs(input_directory, output_directory):
    # Create output directory if it doesn't exist
    os.makedirs(output_directory, exist_ok=True)
    
    # Get list of PDF files to process
    pdf_files = [
        f for f in os.listdir(input_directory) 
        if f.endswith('.pdf') and 
           'annotated' not in f.lower() and 
           os.path.splitext(f)[0] + '.txt' not in os.listdir(output_directory)
    ]
    
    # Determine optimal number of processes
    # Use all but one CPU core to prevent system slowdown
    num_processes = max(1, multiprocessing.cpu_count() - 1)
    
    # Use a process pool for parallel processing
    with multiprocessing.Pool(processes=num_processes) as pool:
        # Partial function to pass multiple arguments
        process_func = partial(process_single_pdf, input_directory, output_directory)
        
        # Process files in parallel
        pool.map(process_func, pdf_files)

# Usage
input_directory = 'downloaded_pdfs'
output_directory = 'downloaded_txts'
extract_text_from_pdfs(input_directory, output_directory)