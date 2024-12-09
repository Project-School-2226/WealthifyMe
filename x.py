import os
import pdfplumber

def extract_text_from_pdfs(input_directory, output_directory):
    os.makedirs(output_directory, exist_ok=True)
    
    for filename in os.listdir(input_directory):
        # Skip files with 'annotated' in the name (case-insensitive)
        if filename.endswith('.pdf') and 'annotated' not in filename.lower():
            pdf_path = os.path.join(input_directory, filename)
            
            try:
                with pdfplumber.open(pdf_path) as pdf:
                    text = ''
                    for page in pdf.pages:
                        text += page.extract_text() + '\n\n'
                    
                    output_filename = os.path.splitext(filename)[0] + '.txt'
                    output_path = os.path.join(output_directory, output_filename)
                    
                    with open(output_path, 'w', encoding='utf-8') as output_file:
                        output_file.write(text)
                    
                    print(f"Processed: {filename}")
            
            except Exception as e:
                print(f"Error processing {filename}: {e}")

# Usage
input_directory = 'downloaded_pdfs'
output_directory = 'downloaded_txts'
extract_text_from_pdfs(input_directory, output_directory)