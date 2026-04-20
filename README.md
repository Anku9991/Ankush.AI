# Ankush.AI — Full Stack Digital Creator Platform

> Website + React Native App + Node.js Backend

---

## 📁 Project Structure

```
ankush-ai/
├── ankush-ai-website/         ← Static HTML website (all-in-one file)
│   └── index.html
│
├── ankush-ai-backend/         ← Node.js Express API
│   ├── server.js
│   ├── package.json
│   ├── .env.example           ← Copy to .env and fill in values
│   └── data/
│       └── leads.json         ← Auto-created, stores form submissions
│
└── ankush-ai-rn/              ← React Native mobile app
    ├── App.js
    ├── package.json
    └── src/
        └── screens/
            ├── HomeScreen.js
            ├── ServicesScreen.js
            ├── PortfolioScreen.js
            ├── AboutScreen.js
            └── ContactScreen.js
```

---

## 🌐 1. Website Setup

**Open locally:**
```bash
# Just open in browser — no build needed!
open ankush-ai-website/index.html
```

**Deploy to production (free options):**
- **Netlify**: Drag & drop the folder at netlify.com
- **Vercel**: `npx vercel --prod`
- **GitHub Pages**: Push to repo → Settings → Pages

**Update backend URL in index.html:**
Find this line and replace with your live backend URL:
```javascript
const res = await fetch('http://localhost:3001/api/contact', {
```
→ Change to `https://your-backend.com/api/contact`

---

## ⚙️ 2. Backend Setup

```bash
cd ankush-ai-backend

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# → Edit .env with your Gmail App Password and admin key

# Start development server
npm run dev       # With auto-reload (uses nodemon)

# Start production server
npm start
```

**API Endpoints:**
| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/contact | Submit contact form lead |
| GET | /api/leads | View all leads (requires x-admin-key header) |
| DELETE | /api/leads/:id | Delete a lead |
| GET | /api/health | Health check |

**View leads from terminal:**
```bash
curl -H "x-admin-key: your-key-here" http://localhost:3001/api/leads
```

**Gmail App Password setup:**
1. Go to myaccount.google.com → Security
2. Enable 2-Step Verification
3. App passwords → Create → Copy the 16-character password
4. Paste in `.env` as `EMAIL_PASS`

**Deploy backend (free options):**
- **Railway**: `railway up`
- **Render**: Connect GitHub repo at render.com
- **Fly.io**: `fly deploy`

---

## 📱 3. React Native App Setup

**Prerequisites:**
- Node.js 18+
- JDK 17
- Android Studio (for Android) or Xcode (for iOS)
- React Native CLI: `npm install -g react-native-cli`

**Setup & Run:**
```bash
cd ankush-ai-rn

# Install dependencies
npm install

# For Android:
npx react-native run-android

# For iOS (Mac only):
cd ios && pod install && cd ..
npx react-native run-ios
```

**Update API URL for real device:**
In `ContactScreen.js`, change:
```javascript
const API_URL = 'http://10.0.2.2:3001/api/contact'; // Android emulator
```
→ For real device: `'https://your-backend.com/api/contact'`

**Build APK for Android:**
```bash
cd android
./gradlew assembleRelease
# APK location: android/app/build/outputs/apk/release/app-release.apk
```

**Publish to Play Store:**
1. Generate keystore: `keytool -genkey -v -keystore ankush-ai.keystore -alias ankush -keyalg RSA -keysize 2048 -validity 10000`
2. Add keystore config to `android/gradle.properties`
3. Build: `./gradlew bundleRelease`
4. Upload `.aab` to Google Play Console

---

## 🎨 Features

### Website
- ✅ Animated hero with particle background
- ✅ All 5 services with pricing cards
- ✅ Portfolio gallery (6 projects)
- ✅ About section with skill bars
- ✅ Testimonials slider
- ✅ Contact form → backend API
- ✅ WhatsApp live chat widget (menu-based)
- ✅ Fully responsive (mobile/tablet/desktop)

### Backend
- ✅ Lead capture & storage (JSON file)
- ✅ Email notification to Ankush (Gmail)
- ✅ Auto-reply email to client
- ✅ Rate limiting (10/hour per IP)
- ✅ Security headers (Helmet.js)
- ✅ Admin endpoint to view/delete leads
- ✅ WhatsApp-formatted lead notification

### React Native App
- ✅ 5-screen app (Home, Services, Portfolio, About, Contact)
- ✅ Bottom tab navigation
- ✅ Service detail modals
- ✅ Portfolio filter by category
- ✅ Contact form with backend integration
- ✅ WhatsApp deep-link integration
- ✅ Animated hero section
- ✅ Dark green/gold themed UI

---

## 🔧 Customization Checklist

- [ ] Replace `ankush.ai2026@gmail.com` with your real email
- [ ] Update phone number `917307852235` if different
- [ ] Add real portfolio project images
- [ ] Set strong `ADMIN_KEY` in `.env`
- [ ] Configure Gmail App Password
- [ ] Deploy backend and update URL in website & app
- [ ] Add Google Analytics to website (optional)
- [ ] Upload app to Google Play Store

---

## 📞 Support

WhatsApp: +91 73078 52235  
Email: ankush.ai2026@gmail.com 
Built with ❤️ in Lucknow, India 🇮🇳
