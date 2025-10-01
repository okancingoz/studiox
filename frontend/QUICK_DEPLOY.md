# 🚀 Quick Production Commands

## Essential Commands

### Build for Production
```bash
npm run build
```
**Output:** Creates optimized files in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
**URL:** http://localhost:4173

### Check for Errors
```bash
npm run lint
```

---

## Deployment Commands

### Vercel (Recommended)
```bash
# First time setup
npm install -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# First time setup
npm install -g netlify-cli

# Deploy
npm run build
netlify deploy --prod
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## File Size Analysis

After building, check bundle sizes:
```bash
npm run build

# Check dist/ folder size
# Windows:
dir dist /s

# Or view the build output in terminal
```

**Expected Sizes (compressed):**
- Main bundle: ~56KB (Brotli)
- Chakra vendor: ~56KB (Brotli)
- Leaflet vendor: ~37KB (Brotli)
- Framer vendor: ~33KB (Brotli)
- React vendor: ~13KB (Brotli)

---

## Testing Production Build

### 1. Build
```bash
npm run build
```

### 2. Preview
```bash
npm run preview
```

### 3. Test in Browser
- Open http://localhost:4173
- Open DevTools (F12)
- Go to Lighthouse tab
- Run audit (in Incognito mode)

**Target Scores:**
- ✅ Performance: 90+
- ✅ Accessibility: 85+
- ✅ Best Practices: 90+
- ✅ SEO: 90+

---

## Environment Variables

### Create production env file:
```bash
# Copy example
copy .env.example .env.production

# Edit with your values
notepad .env.production
```

### Example .env.production:
```env
VITE_API_URL=https://api.studiox.com
VITE_APP_VERSION=1.0.0
```

**Note:** Never commit `.env.production` to Git!

---

## Common Issues & Fixes

### Issue: Build fails
```bash
# Clear cache and reinstall
rmdir /s /q node_modules
del package-lock.json
npm install --legacy-peer-deps
npm run build
```

### Issue: Routes don't work on server
**Fix:** Ensure your hosting platform redirects all routes to `index.html`
- Vercel: Already configured in `vercel.json`
- Netlify: Already configured in `netlify.toml`
- Apache: Use `.htaccess` in `public/` folder
- Nginx: Configure `try_files` directive

### Issue: Images not loading
**Fix:** Check image paths are relative and in `dist/assets/`

### Issue: Console logs in production
**Fix:** Already removed by Terser during build

---

## Performance Checklist

Before deploying:
- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] Check Lighthouse score (90+)
- [ ] Verify images load
- [ ] Test all routes
- [ ] Check mobile responsiveness
- [ ] Verify no console errors
- [ ] Test in different browsers

---

## Quick Deploy to Vercel (Easiest)

```bash
# 1. Install Vercel CLI (one time)
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
cd c:\Users\okanc\studiox\frontend
vercel --prod

# Done! 🎉
```

---

## Automated Deployment (GitHub + Vercel)

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

**Result:** Auto-deploy on every push to main! 🚀

---

## Need Help?

See full guide: `DEPLOYMENT_GUIDE.md`
