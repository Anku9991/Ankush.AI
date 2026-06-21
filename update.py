import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports
content = content.replace(
    'import InstagramFeed from "@/components/InstagramFeed";',
    'import InstagramFeed from "@/components/InstagramFeed";\nimport { Navbar } from "@/components/Navbar";\nimport { Footer } from "@/components/Footer";'
)

# Replace Navbar
navbar_pattern = re.compile(r'\{\/\*\s*NAVIGATION\s*\*\/\}.*?<\/nav>', re.DOTALL)
content = navbar_pattern.sub('<Navbar />', content)

# Replace Footer & Legal Modal
# We know the footer starts with <footer> and ends with the final </div> of the legal modal, 
# which is right before </main>. So let's replace from <footer> to the end of </main>
footer_pattern = re.compile(r'<footer>.*?<\/main>', re.DOTALL)
content = footer_pattern.sub('<Footer />\n    </main>', content)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
