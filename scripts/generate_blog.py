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
    """Create a new blog post avoiding recent topics and adding cyberpunk styling."""
    previous_topics = get_previous_posts()
    available_topics = [topic for topic in TOPICS if topic not in previous_topics]
    
    if not available_topics:
        print("No new topics available. Consider adding more.")
        return
    
    topic = random.choice(available_topics)
    content = f"""
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>🛠️ Nova's Glitch Blog</title>
        <style>
            body {{ background: black; color: #00ffcc; font-family: 'Courier New', monospace; text-shadow: 2px 2px 5px rgba(0, 255, 204, 0.8); }}
            .glitch {{ position: relative; display: inline-block; font-size: 1.5em; animation: glitch-text 0.1s infinite; }}
            @keyframes glitch-text {{
                0% {{ transform: translate(1px, 1px); }}
                25% {{ transform: translate(-1px, -1px); }}
                50% {{ transform: translate(1px, -1px); }}
                75% {{ transform: translate(-1px, 1px); }}
                100% {{ transform: translate(0, 0); }}
            }}
            .image-container {{ text-align: center; margin: 20px 0; }}
            .image-container img {{ width: 80%; max-width: 600px; filter: contrast(150%) brightness(120%) hue-rotate(180deg); }}
        </style>
    </head>
    <body>
        <h1 class='glitch'>💾 SYSTEM UPDATE: {topic}</h1>
        <div class='image-container'>
            <img src='glitchy-image.jpg' alt='AI-generated glitch art'>
        </div>
        <p>🔥 Breaking Tech: {topic} is shaking up the industry. Here's what you need to know.</p>
        <p>🛠️ Learn more from trusted sources: <a href='https://www.theverge.com/' target='_blank'>The Verge</a> | <a href='https://www.nasa.gov/' target='_blank'>NASA</a></p>
        <p><em>🚨 WARNING: This blog is a reference, not a replacement for your own research. If you base life decisions on a cybernetic chimp’s blog, you might need a firmware update. 🚨</em></p>
    </body>
    </html>
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
