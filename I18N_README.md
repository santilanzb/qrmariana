# Internationalization (i18n) Implementation

## Overview
This portfolio now supports **bilingual functionality** with automatic language detection and manual language switching between **English** and **Spanish**.

## Features

### 1. Automatic Language Detection
- The page automatically detects the user's browser language on first visit
- If the browser language is Spanish (`es-*`), the page will display in Spanish
- Otherwise, the page defaults to English
- Language preference is saved in `localStorage` for future visits

### 2. Manual Language Toggle
- A language toggle button is added to the top navigation bar (next to the mobile menu button)
- Button displays:
  - `🇪🇸 ES` when current language is English (click to switch to Spanish)
  - `🇺🇸 EN` when current language is Spanish (click to switch to English)
- The button has a smooth gradient design matching the site's color scheme
- Clicking the button instantly switches all content on the page

### 3. Persistent Language Preference
- User's language choice is saved in `localStorage`
- The selected language persists across page reloads and browser sessions
- Key: `preferredLanguage`
- Values: `en` or `es`

## Technical Implementation

### File Structure
```
qr-portfolio/
├── js/
│   ├── i18n.js          # New i18n module
│   ├── main.js          # Updated to initialize i18n
│   └── ...
├── css/
│   ├── navigation.css   # Updated with lang-toggle styles
│   ├── responsive.css   # Updated with mobile lang-toggle styles
│   └── ...
└── index.html           # Updated with data-i18n attributes
```

### Key Files

#### `js/i18n.js`
- Contains all translations for English and Spanish
- Manages language detection and switching
- Creates the language toggle button dynamically
- Updates all translatable elements on the page

#### `index.html`
- All translatable text elements now have `data-i18n` attributes
- Example: `<h2 class="section-title" data-i18n="about.title">About Me</h2>`

### Translation Keys
Translation keys follow a hierarchical naming convention:
- `nav.*` - Navigation items
- `hero.*` - Hero section content
- `about.*` - About section content
- `education.*` - Education section content
- `expertise.*` - Expertise section content
- `services.*` - Services section content
- `contact.*` - Contact section content
- `footer.*` - Footer content

### How It Works

1. **Page Load**: When the page loads, `initI18n()` is called first
2. **Language Detection**: The system checks for a saved language preference or detects browser language
3. **Content Update**: All elements with `data-i18n` attributes are updated with the appropriate translation
4. **Button Creation**: The language toggle button is dynamically added to the navbar
5. **User Interaction**: When the user clicks the toggle button, the language switches and content updates instantly

## Usage

### For Users
1. Visit the page - it will automatically display in your browser's language (English or Spanish)
2. Click the language button in the top-right corner to switch languages at any time
3. Your language preference will be remembered for future visits

### For Developers

#### Adding New Translatable Content
1. Add the content to both language objects in `js/i18n.js`:
```javascript
en: {
    'section.newkey': 'English text',
    // ...
},
es: {
    'section.newkey': 'Texto en español',
    // ...
}
```

2. Add the `data-i18n` attribute to the HTML element:
```html
<p data-i18n="section.newkey">English text</p>
```

#### Adding New Languages
To add support for more languages (e.g., French):
1. Add a new language object in `js/i18n.js`
2. Update the `detectBrowserLanguage()` function
3. Update the `setLanguage()` function validation
4. Add a new flag/icon to the toggle button logic

## Browser Compatibility
- Uses `navigator.language` and `navigator.userLanguage` for language detection
- Uses `localStorage` for persistence (supported in all modern browsers)
- Falls back to English if detection fails

## Notes
- Language detection happens once on first visit
- Subsequent visits use the saved preference
- The toggle button overrides automatic detection
- All emojis and icons remain unchanged across languages
- WhatsApp links and external resources remain in their original language
