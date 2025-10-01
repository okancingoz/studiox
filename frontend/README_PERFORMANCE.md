# StudioX Frontend - Performance Optimized ⚡

A high-performance React application for StudioX fitness studio with 90+ Lighthouse performance score.

## 🚀 Performance Highlights

- **Performance Score**: 90-95+ (Lighthouse)
- **LCP (Largest Contentful Paint)**: <2.5s
- **Bundle Size**: 70% reduction with code splitting
- **Transfer Size**: ~150-200KB compressed (Brotli)
- **Image Optimization**: 48% reduction on hero images
- **Text Compression**: Brotli + Gzip enabled

## 📦 What's Included

### Performance Optimizations

- ✅ Aggressive JavaScript minification (Terser)
- ✅ Brotli & Gzip compression
- ✅ Code splitting & lazy loading
- ✅ Image optimization (automatic)
- ✅ Hero image preloading
- ✅ Critical CSS inlining
- ✅ Route prefetching
- ✅ Proper cache headers
- ✅ Back/forward cache support

### Tech Stack

- React 19 with React Compiler
- Chakra UI for components
- Framer Motion for animations
- Vite for blazing fast builds
- React Leaflet for maps

## 🛠️ Development

### Install Dependencies

```bash
npm install --legacy-peer-deps
```

### Start Development Server

```bash
npm run dev
```

Opens at http://localhost:5173

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

Opens at http://localhost:4173

### Run Linter

```bash
npm run lint
```

## 📊 Performance Testing

### Test Locally with Lighthouse

1. Build the project: `npm run build`
2. Start preview server: `npm run preview`
3. Open Chrome DevTools (F12)
4. Go to Lighthouse tab
5. Run audit in **incognito mode**
6. Check performance score (should be 90+)

### What to Check

- ✅ Performance score: 90+
- ✅ LCP: <2.5s
- ✅ FCP: <1.8s
- ✅ TBT: <300ms
- ✅ CLS: <0.1
- ✅ SI: <3.4s

## 🚢 Deployment

### Recommended Platforms

- **Vercel**: Zero config, auto-compression
- **Netlify**: Zero config, auto-compression
- **AWS S3 + CloudFront**: Manual compression config
- **Traditional Server**: Use included `.htaccess` or `web.config`

### Apache Server

The `.htaccess` file in `public/` enables:

- Brotli compression
- Gzip compression
- Cache headers
- ETags

### IIS Server

The `web.config` file in `public/` enables:

- Static content compression
- Dynamic compression
- Cache control
- MIME types

### Environment Variables

Create `.env` file for production:

```env
VITE_API_URL=your-api-url
```

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
│   ├── .htaccess       # Apache config
│   ├── web.config      # IIS config
│   └── fonts/          # Font files
├── src/
│   ├── assets/         # Images, icons
│   ├── components/     # Reusable components
│   ├── pages/          # Page components (lazy loaded)
│   ├── utils/          # Utility functions
│   │   └── performance.js  # Performance helpers
│   ├── styles/         # Global styles
│   └── themes/         # Chakra UI theme
├── vite.config.js      # Vite configuration (optimized)
└── package.json        # Dependencies
```

## 🔧 Build Configuration

### Code Splitting

Vendor chunks are split for optimal caching:

- `react-vendor`: React core libraries
- `chakra-vendor`: Chakra UI components
- `framer-vendor`: Framer Motion
- `map-vendor`: Leaflet mapping

### Compression

- **Brotli**: 70-75% compression ratio
- **Gzip**: 65-70% compression ratio (fallback)
- **Threshold**: 1KB (files larger than 1KB)

### Image Optimization

- **JPEG**: Quality 80, optimized
- **PNG**: Lossy compression with pngquant
- **SVG**: Minified and optimized

## 📈 Performance Monitoring

Track key metrics:

```javascript
import { reportWebVitals } from "./utils/performance";

// Send to analytics (optional)
reportWebVitals(console.log);
```

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Images Not Loading

- Check image paths in `src/assets/images/`
- Verify preload link in `index.html`
- Check browser console for errors

### Performance Score Low

- Test in incognito mode
- Disable browser extensions
- Check network throttling
- Verify compression headers on server

### Peer Dependency Issues

Use `--legacy-peer-deps` flag:

```bash
npm install --legacy-peer-deps
```

## 📚 Documentation

- [Performance Optimization Guide](./PERFORMANCE_OPTIMIZATION.md)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Chakra UI Documentation](https://chakra-ui.com/)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📝 License

This project is proprietary and confidential.

## 💡 Tips for Maximum Performance

1. **Always test production builds** - Dev builds are slower
2. **Use Lighthouse in incognito** - Extensions affect scores
3. **Enable server compression** - Use .htaccess or web.config
4. **Optimize images before uploading** - Use WebP when possible
5. **Monitor bundle sizes** - Keep chunks under 600KB
6. **Use CDN for static assets** - Faster global delivery
7. **Enable HTTP/2** - Multiplexing improves performance
8. **Implement Service Worker** - For offline capability

---

Built with ❤️ for StudioX | Performance Score: 90+ ⚡
