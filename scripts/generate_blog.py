import os
import random
from datetime import datetime

# Blog storage paths
BLOG_DIR = "C:/Users/SameS/Desktop/Samesite/Blog/"
ACTIVE_BLOG = os.path.join(BLOG_DIR, "active_blog.html")
ARCHIVE_DIR = os.path.join(BLOG_DIR, "archives/")
TOPICS = [
    "Top 5 Cybersecurity Trends",
    "How AI is Changing Web Development",
    "The Future of Automation in Blogging",
    "Best Practices for SEO Optimization",
    "How to Monetize a Website with Affiliate Marketing"
]

# Ensure archive folder exists
os.makedirs(ARCHIVE_DIR, exist_ok=True)

def get_previous_posts():
    """Retrieve last 5 blog topics to avoid duplication."""
    archive_files = sorted(os.listdir(ARCHIVE_DIR), reverse=True)[:5]
    previous_topics = []
    for file in archive_files:
        with open(os.path.join(ARCHIVE_DIR, file), "r", encoding="utf-8") as f:
            first_line = f.readline().strip()
            previous_topics.append(first_line.replace("<h1>", "").replace("</h1>", ""))
    return previous_topics

def generate_blog_post():
    """Create a new blog post avoiding recent topics."""
    previous_topics = get_previous_posts()
    available_topics = [topic for topic in TOPICS if topic not in previous_topics]
    
    if not available_topics:
        print("No new topics available. Consider adding more.")
        return
    
    topic = random.choice(available_topics)
    content = f"""
    <h1>{topic}</h1>
    <p><em>Published on {datetime.now().strftime('%Y-%m-%d')}</em></p>
    <p>This is a placeholder blog post about {topic}. More content to come...</p>
    """
    
    # Archive previous active blog
    if os.path.exists(ACTIVE_BLOG):
        timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
        os.rename(ACTIVE_BLOG, os.path.join(ARCHIVE_DIR, f"blog_{timestamp}.html"))
    
    # Write new active blog
    with open(ACTIVE_BLOG, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"New blog post created: {topic}")

if __name__ == "__main__":
    generate_blog_post()
