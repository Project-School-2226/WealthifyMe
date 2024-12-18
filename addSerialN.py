import os
import re

def add_serial_numbers(directory):
    # List all files in the directory
    files = os.listdir(directory)
    
    # Sort files to maintain a consistent order
    files.sort()

    for i, filename in enumerate(files):
        # Construct the new filename with a serial number
        new_filename = f"{i+1:03d}_{filename}"
        
        # Get full paths
        old_filepath = os.path.join(directory, filename)
        new_filepath = os.path.join(directory, new_filename)
        
        # Rename the file
        os.rename(old_filepath, new_filepath)
        print(f"Renamed: {filename} -> {new_filename}")

# Specify the directory
directory = "/teamspace/studios/this_studio/WealthifyMe/downloaded_txts"

# Add serial numbers to file names
add_serial_numbers(directory)