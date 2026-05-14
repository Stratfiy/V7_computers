# V7 Computers - Website

Official website for **V7 Computers** — One stop solutions for all your IT needs.

📍 Hosur | Krishnagiri | Bangalore

---

## 📁 Project Structure

```
v7-computers/
├── index.html          # Home page
├── about.html          # About Us page
├── services.html       # Services page
├── solutions.html      # Solutions page (products + IT solutions)
├── shop.html           # Shop page (redirects to Shopify store)
├── contact.html        # Contact page with enquiry form
├── css/
│   └── style.css       # All custom styles
├── js/
│   └── main.js         # Navigation, animations, form handler
├── images/             # Place product/brand images here
└── README.md           # This file
```

---

## 🚀 Quick Start

### Step 1: Clone / Download

```bash
git clone https://github.com/YOUR_USERNAME/v7-computers.git
cd v7-computers
```

### Step 2: Open in Browser

Simply open `index.html` in any browser. No build tools required — it's a pure HTML/CSS/JS static site.

```bash
# On Mac
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

### Step 3: Configure Shopify Redirect

Open `shop.html` and find this line near the bottom:

```javascript
const SHOPIFY_STORE_URL = 'https://your-shopify-store.myshopify.com';
```

Replace it with your actual Shopify store URL.

---

## 🌐 Deployment Options

### Option A: GitHub Pages (Free)

1. Push to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch, root folder
4. Your site will be live at `https://YOUR_USERNAME.github.io/v7-computers/`

### Option B: Vercel (Free)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repo
4. Deploy — done!

### Option C: Netlify (Free)

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import from Git
4. Deploy!

### Option D: Custom Domain

After deploying, add your custom domain (e.g., `www.v7computers.in`) via your hosting provider's DNS settings.

---

## ✏️ Customization Guide

### Adding Product Images

1. Place images in the `images/` folder
2. Replace emoji placeholders in the HTML with `<img>` tags:

```html
<!-- Before -->
<div class="product-img">💻</div>

<!-- After -->
<div class="product-img">
  <img src="images/hp-640-g8.jpg" alt="HP 640 G8 Laptop">
</div>
```

### Adding Brand Logos

Replace text brand names in the brands section with actual logo images:

```html
<!-- Before -->
<div class="brand-item">DELL</div>

<!-- After -->
<div class="brand-item">
  <img src="images/brands/dell-logo.png" alt="Dell" height="40">
</div>
```

### Updating Contact Info

Search and replace these across all HTML files:
- Phone: `9943659284`, `9787879031`, `9787879013`
- Email: `contact@v7computers.in`
- Address: `#4/340-B1, NGGOS Colony...`
- WhatsApp links: `https://wa.me/919943659284`

### Adding Google Maps

In `contact.html`, replace the iframe `src` with your actual Google Maps embed URL:
1. Go to Google Maps
2. Search your business location
3. Click Share → Embed a map
4. Copy the iframe src URL

### Social Media Links

Update the footer social links in each HTML file:

```html
<a href="https://facebook.com/v7computers"><i class="fab fa-facebook-f"></i></a>
<a href="https://instagram.com/v7computers"><i class="fab fa-instagram"></i></a>
```

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Scroll reveal animations
- ✅ WhatsApp integration (float button + contact form)
- ✅ SEO-friendly meta tags
- ✅ Fast loading (no frameworks, pure HTML/CSS/JS)
- ✅ Font Awesome icons
- ✅ Google Fonts (Outfit + Plus Jakarta Sans)
- ✅ Counter animations on stats
- ✅ Mobile hamburger menu
- ✅ Sticky header with scroll effect
- ✅ Shop page with Shopify redirect

---

## 🛠 Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid, flexbox, animations
- **Vanilla JavaScript** — no dependencies
- **Font Awesome 6** — icons (CDN)
- **Google Fonts** — Outfit + Plus Jakarta Sans (CDN)

No build tools, no Node.js, no npm — just open and go!

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, services overview, products, why us, CTA |
| About | `about.html` | Company info, mission/vision, locations |
| Services | `services.html` | All 9 services detailed, SSD/RAM upgrade spotlight |
| Solutions | `solutions.html` | 4 solution categories + printer catalog |
| Shop | `shop.html` | Product categories → Shopify redirect |
| Contact | `contact.html` | Form (→ WhatsApp), map, all contact details |

---

## 📞 V7 Computers Contact

- **Sales:** +91 99436 59284 / +91 97878 79031
- **Service:** +91 97878 79013
- **Email:** contact@v7computers.in
- **Web:** www.v7computers.in
- **Address:** #4/340-B1, NGGOS Colony, Opp. Max Showroom, Bagalur Road, Hosur - 635109 TN

---

Built with ❤️ for V7 Computers
