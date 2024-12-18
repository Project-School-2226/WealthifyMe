import os
import shutil

def is_good_file(filepath, min_non_empty_lines=10):
    """
    Check if the file has a significant number of non-empty lines.
    Default threshold is 10 non-empty lines.
    """
    non_empty_lines = 0
    with open(filepath, 'r', encoding='utf-8') as file:
        for line in file:
            if line.strip():  # Check if line is not just whitespace
                non_empty_lines += 1
            if non_empty_lines >= min_non_empty_lines:
                return True
    return False

def categorize_files(source_dir, good_dir, bad_dir, min_non_empty_lines=10):
    """
    Categorize files from source_dir into good_dir and bad_dir.
    """
    # Append the min_non_empty_lines value to the directory names
    good_dir = f"{good_dir}_{min_non_empty_lines}"
    bad_dir = f"{bad_dir}_{min_non_empty_lines}"

    # Ensure the target directories exist
    os.makedirs(good_dir, exist_ok=True)
    os.makedirs(bad_dir, exist_ok=True)

    # Iterate through all files in the source directory
    for filename in os.listdir(source_dir):
        if filename.endswith('.txt'):
            source_filepath = os.path.join(source_dir, filename)
            if is_good_file(source_filepath, min_non_empty_lines):
                target_filepath = os.path.join(good_dir, filename)
                print(f"Copied to {good_dir}: {filename}")
            else:
                target_filepath = os.path.join(bad_dir, filename)
                print(f"Copied to {bad_dir}: {filename}")
            
            # Copy the file to the appropriate directory
            shutil.copy(source_filepath, target_filepath)

# Directories
source_directory = "/teamspace/studios/this_studio/WealthifyMe/downloaded_txts"
good_directory = "/teamspace/studios/this_studio/WealthifyMe/good_txts"
bad_directory = "/teamspace/studios/this_studio/WealthifyMe/bad_txts"

# Categorize files
categorize_files(source_directory, good_directory, bad_directory, min_non_empty_lines=5)