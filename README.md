# Ocean FG Sdn Bhd - Corporate Website

A professional corporate website for Ocean FG Sdn Bhd (Company Registration Number: 1330388-P), a prominent Malaysian Bumiputera company specializing in high-quality marine services, vessel chartering, logistics, and offshore survey work.

## 📋 About Ocean FG

Ocean FG SDN. BHD. is a regional leader in marine/Oil & Gas solutions based in Kuantan, Pahang, Malaysia. The company excels in integrating international standards with extensive local expertise, offering efficient and superior marine operations across Southeast Asia.

### Key Achievements
- **375% Revenue Growth** from 2019 to 2024
- **RM 10M Annual Revenue** (before audit)
- **Petronas SWEC Code Registered**
- **12+ Industry Certifications**
- Management of **Sangkar Cahaya jetty and shipyard** in Kuala Pahang, Pekan

## ✨ Features

### Sections
1. **Hero Section** - Dynamic diagonal design with maritime imagery
2. **About Section** - Company overview with statistics and growth metrics
3. **Vision & Mission** - Corporate values and objectives with interactive hover states
4. **Board of Directors** - Leadership team profiles
5. **Services** - 6 comprehensive service offerings with detailed descriptions
6. **Certifications** - 12 industry certifications with interactive badge display
7. **Project Timeline** - Historical project milestones from 2019-2025
8. **Revenue Chart** - Visual growth representation with interactive bars
9. **Client Portfolio** - Trusted industry partners
10. **Contact Form** - Professional inquiry system with validation

### Interactive Elements
- Smooth scroll navigation
- Hover effects on cards and buttons
- Interactive statistics cards with state transitions
- Animated certification badges
- Responsive navigation menu
- Form validation with error messages

## 🎨 Design System

### Color Palette
```css
Primary Colors:
- Ocean Blue: #0089D0 (Main brand color)
- Dark Blue: #006BA8 (Hover states)
- Light Blue: #33A3DC (Backgrounds)
- Lime Yellow: #BFDE00 (Accent highlights)

Neutral Colors:
- Black: #000000 (Headings, emphasis)
- White: #FFFFFF (Backgrounds, contrast text)
- Gray Scale: #F5F5F5 to #1A1A1A (UI elements)
```

### Typography
- **Font Family**: Segoe UI, system fonts
- **Heading Sizes**: 36px - 60px (responsive)
- **Body Text**: 16px base, 14-18px range
- **Line Heights**: 1.25 - 1.75 (content dependent)

### Spacing System
- Based on 4px grid system
- Range: 4px (0.25rem) to 128px (8rem)
- Consistent padding and margins throughout

## 🛠 Technology Stack

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **CSS Variables** - Theme management
- **SVG** - Scalable icons and graphics

### Architecture
- **Modular CSS** - Separated into logical files:
  - `variables.css` - Theme configuration
  - `reset.css` - Browser normalization
  - `typography.css` - Font styling
  - `layout.css` - Grid and container systems
  - `components.css` - Reusable UI components
  - `sections.css` - Page section styles
  - `animations.css` - Transitions and effects

### Design Patterns
- **Mobile-First Responsive Design**
- **Progressive Enhancement**
- **Component-Based Architecture**
- **BEM-like CSS Methodology**

## 📁 Project Structure

```
Website Ocean FG/
├── assets/
│   ├── css/
│   │   ├── base.css          # Master CSS file (imports all modules)
│   │   ├── variables.css     # Theme variables and colors
│   │   ├── reset.css         # Browser reset
│   │   ├── typography.css    # Font and text styles
│   │   ├── layout.css        # Grid and layout utilities
│   │   ├── components.css    # Reusable UI components
│   │   ├── sections.css      # Page section styles
│   │   └── animations.css    # Transitions and effects
│   ├── js/
│   │   └── base.js           # Main JavaScript functionality
│   └── images/
│       ├── favicon.ico       # Site favicon
│       └── (additional images)
├── Resources/                # Project resources and assets
├── index.html               # Main website file
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE
- Local web server (optional, for development)

### Installation

1. **Clone or download the project**
   ```bash
   git clone [repository-url]
   cd "Website Ocean FG"
   ```

2. **No build process required** - Pure HTML/CSS/JS implementation

3. **Open in browser**
   ```bash
   # Open index.html directly in browser
   # OR use a local server:
   python -m http.server 8000
   # OR
   npx http-server
   ```

4. **View the website**
   ```
   Navigate to: http://localhost:8000
   ```

## 💻 Development

### File Editing
- **HTML**: Edit `index.html` for content changes
- **Styles**: Modify files in `assets/css/` for styling
- **Scripts**: Update `assets/js/base.js` for functionality
- **Images**: Add to `assets/images/` and reference in HTML

### CSS Modules
The CSS is organized into logical modules for easy maintenance:
1. **Variables** - Change colors, spacing, fonts in one place
2. **Components** - Reusable UI elements (buttons, cards, forms)
3. **Sections** - Specific page sections (hero, about, services)
4. **Responsive** - Media queries for mobile/tablet/desktop

### Customization
- **Colors**: Edit `assets/css/variables.css` (`:root` section)
- **Typography**: Adjust in `variables.css` (font sizes and weights)
- **Spacing**: Modify spacing scale in `variables.css`
- **Breakpoints**: Update responsive breakpoints in `variables.css`

## 📱 Browser Compatibility

### Supported Browsers
- ✅ Chrome 90+ (Recommended)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## 🎯 Features in Detail

### Navigation
- Fixed navigation bar with scroll detection
- Mobile hamburger menu
- Smooth scroll to sections
- Active link highlighting

### Form System
- Client-side validation
- Required field indicators
- Error message display
- Service selection dropdown
- Full-width message textarea

### Interactive Cards
- Service cards with hover overlays
- Certification badges with state transitions
- Statistics cards with animated numbers
- Leader cards with hover effects

### Timeline
- Visual project history
- Gradient timeline connector
- Year markers with content
- Revenue growth chart

## 🔧 Maintenance

### Adding New Sections
1. Add HTML structure in `index.html`
2. Create section styles in `assets/css/sections.css`
3. Add navigation link if needed
4. Ensure responsive design

### Updating Content
- **Text**: Edit directly in `index.html`
- **Images**: Replace in `assets/images/` folder
- **Colors**: Modify CSS variables in `variables.css`
- **Fonts**: Update font family in `variables.css`

## 📄 License

This project is proprietary and confidential. All rights reserved by Ocean FG Sdn Bhd (1330388-P).

## 📞 Contact

**Ocean FG SDN BHD**
- **Address**: B-28, Second Floor, Jalan Indera Mahkota 7/2, Bandar Indera Mahkota, 25200 Kuantan, Pahang Darul Makmur, Malaysia
- **Phone**: +6017-297 1545
- **Email**: support@oceanfg.net

---

© 2025 Ocean FG Sdn Bhd (1330388-P). All rights reserved.
