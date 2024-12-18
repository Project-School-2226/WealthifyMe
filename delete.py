import os
import shutil

def delete_folders_with_keywords(directory, keywords):
    for root, dirs, files in os.walk(directory, topdown=False):
        for dir_name in dirs:
            if any(keyword in dir_name for keyword in keywords):
                dir_path = os.path.join(root, dir_name)
                print(f"Deleting folder: {dir_path}")
                shutil.rmtree(dir_path)

if __name__ == "__main__":
    source_directory = "/teamspace/studios/this_studio/WealthifyMe"
    keywords = ["good", "bad"]
    delete_folders_with_keywords(source_directory, keywords)