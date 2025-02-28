import os
import json
import datetime

ARCHIVE_DIR = "archive"
OUTPUT_FILE = "archive/blog_index.json"

def organize_archives():
    """Scans the archive folder and creates a structured JSON index of past blogs."""
    archive_data = []
    
    for filename in os.listdir(ARCHIVE_DIR):
        if filename.endswith(".html"):  # Only process blog HTML files
            file_path = os.path.join(ARCHIVE_DIR, filename)
            timestamp = filename.replace("blog_", "").replace(".html", "")
            
            try:
                date_obj = datetime.datetime.strptime(timestamp, "%Y-%m-%d")
                formatted_date = date_obj.strftime("%B %d, %Y")
            except ValueError:
                formatted_date = "Unknown Date"
            
            archive_data.append({
                "file": filename,
                "date": formatted_date,
                "path": file_path
            })
    
    with open(OUTPUT_FILE, "w") as json_file:
        json.dump(archive_data, json_file, indent=4)
    
    print(f"Archive index updated: {OUTPUT_FILE}")

if __name__ == "__main__":
    organize_archives()
