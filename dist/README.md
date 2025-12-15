# EPUB3 Media Overlay Reader - PWA Setup

A Progressive Web App for reading EPUB3 books with media overlay support, Google Drive sync, and offline capabilities.

## 🚀 Quick Start

### Method 1: Using Python (Recommended for local testing)
```bash
# Navigate to the project folder
cd path/to/epub-reader

# Start a local server
python -m http.server 8000
# Or with Python 2:
python -m SimpleHTTPServer 8000

# Open browser to: http://localhost:8000
```

### Method 2: Using Node.js
```bash
# Install serve globally (one time)
npm install -g serve

# Run the server
serve

# Open the URL shown in terminal
```

### Method 3: Using PHP
```bash
php -S localhost:8000
```

## 📱 PWA Features

- ✅ **Offline Support** - Works without internet after first load
- ✅ **Installable** - Add to home screen like a native app
- ✅ **Background Sync** - Syncs Google Drive data when online
- ✅ **Media Session** - Control playback from lock screen
- ✅ **Wake Lock** - Keep screen on during reading
- ✅ **Fast Loading** - Cached assets for instant access

## 🎨 Creating Icons

1. Open `create-icons.html` in a browser
2. Right-click each link to save the icons
3. Place `icon-192.png` and `icon-512.png` in the root folder

Or use your own icons (192x192 and 512x512 PNG files).

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Create a new repository on GitHub
2. Push all files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/epub-reader.git
   git push -u origin main
   ```
3. Go to Settings → Pages → Select "main" branch
4. Your app will be live at: `https://yourusername.github.io/epub-reader`

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Get instant HTTPS URL
4. Optional: Connect to GitHub for auto-deploys

### Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Get instant deployment

### Cloudflare Pages (Free)
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repo or upload files
3. Instant global CDN deployment

## 📋 Required Files

```
epub-reader/
├── index.html           # Main app file
├── manifest.json        # PWA manifest
├── service-worker.js    # Offline functionality
├── icon-192.png         # App icon (192x192)
├── icon-512.png         # App icon (512x512)
├── create-icons.html    # Icon generator (optional)
└── README.md           # This file
```

## 🔧 Configuration

### Google Drive Sync
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable "Google Drive API"
4. Create credentials:
   - OAuth 2.0 Client ID (Web application)
   - API Key
5. Add authorized origins (your deployment URL)
6. In the app, click ☰ → Sync with Drive → ⚙️ Configure
7. Enter your Client ID and API Key

## 📱 Installing the App

### On Desktop (Chrome/Edge)
1. Open the app in browser
2. Look for install icon in address bar
3. Click "Install"

### On Android
1. Open the app in Chrome
2. Tap the banner or menu → "Install app"
3. App appears on home screen

### On iOS (Safari)
1. Open the app in Safari
2. Tap Share button
3. Select "Add to Home Screen"

## 🧪 Testing PWA Features

### Chrome DevTools
1. Open DevTools (F12)
2. Go to "Application" tab
3. Check:
   - **Manifest**: Should show all app details
   - **Service Workers**: Should be "activated and running"
   - **Cache Storage**: Should show cached files

### Lighthouse Audit
1. Open DevTools → Lighthouse tab
2. Select "Progressive Web App"
3. Run audit
4. Aim for 90+ score

### Offline Test
1. Load the app once
2. Open DevTools → Network tab
3. Check "Offline" checkbox
4. Refresh page - should still work!

## 🎯 Features

### Library Management
- Add books from local storage
- Import from cloud URLs (Dropbox, Google Drive)
- Track reading progress
- Resume where you left off

### Reading Features
- Media overlay playback (audio sync with text)
- Multiple playback speeds (0.5x - 2x)
- Dark mode
- Adjustable font size and family
- Line spacing and text alignment
- Fullscreen mode
- Sleep timer
- Screen wake lock

### Sync Features
- Google Drive integration
- Auto-sync every 5 minutes
- Manual sync on demand
- Conflict resolution

## 🐛 Troubleshooting

### Service Worker Not Registering
- Must use HTTPS or localhost
- Check browser console for errors
- Clear cache and reload

### Icons Not Showing
- Ensure icon files are in root directory
- Check file names match manifest.json
- Must be PNG format, correct dimensions

### Install Button Not Appearing
- Only works on HTTPS (or localhost)
- May not appear if already installed
- Some browsers don't support PWA install

### Google Drive Sync Not Working
- Check API credentials are correct
- Verify authorized origins include your domain
- Check browser console for errors

## 📄 Browser Support

- ✅ Chrome/Edge 90+ (Full support)
- ✅ Safari 14+ (Most features)
- ✅ Firefox 90+ (Most features)
- ⚠️ Safari iOS (No background sync)
- ⚠️ Firefox (Limited install prompt)

## 🔒 Privacy & Storage

- All data stored locally in browser
- Optional Google Drive sync (requires user consent)
- No analytics or tracking
- No external data collection

## 📚 EPUB Support

- EPUB3 format
- Media overlays (SMIL)
- Text + Audio synchronization
- Images and formatting
- Table of contents

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📜 License

MIT License - free to use and modify

## 🙋 Support

For issues or questions:
1. Check the Troubleshooting section
2. Search existing issues on GitHub
3. Open a new issue with details

---

**Made with ❤️ for book lovers everywhere**
