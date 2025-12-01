# Mariana White Portfolio - Deployment Notes

## ✅ Completed Changes

### Personal Information Updated
- **Name**: MSc. Mariana White
- **Title**: Co-founder & Director, NutriWhite | Holistic Nutrition & Wellness Specialist
- **Specialization**: Infertility, pregnancy & lactation, and integrative nutrition care

### Educational Background Updated
1. **MSc in Holistic Nutrition**
   - Holistic Health
   - Integrative Nutrition
   - Wellness Coaching
   - Alternative Medicine
   - Anatomy & Physiology (Honors)

2. **BSc in Nutrition & Dietetics**
   - Nutritional Assessment
   - Dietary Planning
   - Food Science
   - Nutrition Counseling
   - Public Health Nutrition

3. **Professional Certifications**
   - Board Certified Holistic Nutritionist
   - Diploma in Positive Psychology
   - Graduate Certificate: Wellness Coaching
   - Graduate Certificate: Alternative Medicine

### Areas of Expertise Updated
1. **👶 Infertility & Preconception Care**
2. **🤰 Pregnancy Nutrition**
3. **🤱 Lactation Support**
4. **🌱 Integrative Nutrition Care**

### Contact Information Updated
- **Assistant WhatsApp**: +584128574606
  - English: https://api.whatsapp.com/send?phone=584128574606&text=Hi,%20I%20come%20from%20Mariana's%20QR%20code,%20I%20want%20a%20consultation%20with%20her
  - Spanish: https://api.whatsapp.com/send?phone=584128574606&text=Hola,%20vengo%20del%20QR%20de%20Mariana,%20quiero%20un%20plan%20de%20consultas%20con%20ella

- **Direct Contact (Mariana)**: +13058900494
  - English: https://api.whatsapp.com/send?phone=13058900494&text=Hi%20Mariana,%20I%20come%20from%20your%20QR%20code
  - Spanish: https://api.whatsapp.com/send?phone=13058900494&text=Hola%20Mariana,%20vengo%20de%20tu%20pagina%20con%20tu%20codigo%20QR

## 📦 Repository Information
- **GitHub Repository**: https://github.com/santilanzb/qrmariana.git
- **Branch**: master
- **Status**: ✅ Initial commit pushed successfully

## 🚀 Next Steps for Bluehost Deployment

### 1. Configure Bluehost Git Deployment
1. Log in to your Bluehost cPanel
2. Navigate to "Git Version Control" or use SSH access
3. Clone the repository:
   ```bash
   git clone https://github.com/santilanzb/qrmariana.git
   ```
4. Point your domain/subdomain to the repository folder

### 2. Domain Configuration Options
Choose one of these options:
- **Option A**: New subdomain (e.g., `mariana.nutriwhite.com`)
- **Option B**: Separate domain (e.g., `qrmariana.com`)
- **Option C**: Subdirectory of existing domain (e.g., `nutriwhite.com/mariana`)

### 3. Update URLs After Deployment
Once you have the live URL, update these files:
- `README.md` (lines 7-8): Replace placeholder URLs with actual URLs
- Consider updating the QR code generation in `js/qr-page.js` if needed

## 🔄 Future Updates

To make changes:
```bash
cd C:\Users\LANZ\SL\qrmariana
# Make your changes
git add .
git commit -m "Description of changes"
git push
```

Then pull changes on Bluehost server:
```bash
cd /path/to/qrmariana
git pull
```

## 📝 Files Modified
- ✅ `index.html` - All personal information, expertise, and contact links
- ✅ `qr-access.html` - QR landing page with Mariana's info
- ✅ `README.md` - Documentation updated

## ⚠️ Items That Need Attention
1. **Profile Image**: Currently using Andreina's placeholder image. Replace with Mariana's photo:
   - Line 41 in `index.html`
   - Line 246 in `qr-access.html`
   
2. **Internationalization (i18n)**: The site has i18n support. If you want to customize Spanish translations beyond the WhatsApp links, edit `js/i18n.js`

3. **Domain/URL Configuration**: Update README.md with actual URLs once deployed

## 📞 Contact Information Summary
| Contact Type | Number | Purpose |
|--------------|--------|---------|
| Assistant | +584128574606 | Consultation booking |
| Direct (Mariana) | +13058900494 | Direct contact |
