# 🚀 Guide: Deploying Ankush.AI to Vercel

Follow these simple steps to put your professional website online and get a live link.

## 1. Prepare your Code
Ensure all your files (`index.html`, etc.) are in a single folder on your computer.

## 2. Upload to GitHub (Git)
GitHub is where your code lives. 
1. Go to [github.com](https://github.com) and log in.
2. Click **New Repository**.
3. Name it `ankush-ai-website` and set it to **Public**.
4. Click **Create Repository**.
5. On your computer, open the terminal in your project folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial professional version"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ankush-ai-website.git
   git push -u origin main
   ```
   *(Replace YOUR_GITHUB_USERNAME with your actual username)*

## 3. Connect to Vercel
Vercel will host your website for free and give you a `vercel.app` link.
1. Go to [vercel.com](https://vercel.com) and log in using your GitHub account.
2. Click **Add New** > **Project**.
3. You will see your `ankush-ai-website` repository. Click **Import**.
4. Leave all settings as default (Framework: Other, Build Command: default).
5. Click **Deploy**.

## 4. Get your Live Link
- After a few seconds, Vercel will give you a link like `ankush-ai-website.vercel.app`.
- Every time you update your code and push to GitHub, Vercel will automatically update your website!

---
### 💡 Professional Tip
- **Custom Domain**: You can connect a custom domain like `ankush.ai` later in the Vercel Settings > Domains tab.
- **WhatsApp Testing**: Test your contact form on the live site to ensure the redirection works perfectly on mobile devices.
