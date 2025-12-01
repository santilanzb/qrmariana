// ===========================
// Internationalization Module
// ===========================

const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.education': 'Education',
        'nav.expertise': 'Expertise',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.subtitle': 'Co-founder & Director, NutriWhite | Holistic Nutrition & Wellness Specialist',
        'hero.btn.services': 'View Services',
        'hero.btn.consultation': 'Book a Consultation',
        'hero.scroll': 'Scroll Down',
        
        // About Section
        'about.title': 'About Me',
        'about.lead': 'Specialist in infertility, pregnancy & lactation, and integrative nutrition care. Provides compassionate, evidence-informed support through both online and in-person consultations.',
        'about.text1': 'As Co-founder and Director of NutriWhite, I combine advanced academic training with practical expertise to help clients achieve optimal health through nutrition and lifestyle interventions.',
        'about.text2': 'My holistic approach integrates evidence-informed nutrition strategies with compassionate care, ensuring that each client receives personalized support tailored to their unique health journey, particularly in fertility, pregnancy, and overall wellness.',
        'about.stat1': 'Certifications & Degrees',
        'about.stat2': 'Compassionate Care',
        'about.stat3': 'Holistic Approach',
        
        // Education Section
        'education.title': 'Academic Qualifications',
        'education.msc.nutrition': '🎓 MSc in Holistic Nutrition',
        'education.certifications': '🏆 Professional Certifications',
        'education.bsc': '🍎 BSc in Nutrition & Dietetics',
        'education.skill.holistic': 'Holistic Health',
        'education.skill.integrative': 'Integrative Nutrition',
        'education.skill.wellness': 'Wellness Coaching',
        'education.skill.alternative': 'Alternative Medicine',
        'education.skill.anatomy': 'Anatomy & Physiology (Honors)',
        'education.skill.bchn': 'Board Certified Holistic Nutritionist',
        'education.skill.psychology': 'Diploma in Positive Psychology',
        'education.skill.coaching': 'Graduate Certificate: Wellness Coaching',
        'education.skill.altmed': 'Graduate Certificate: Alternative Medicine',
        'education.skill.assessment': 'Nutritional Assessment',
        'education.skill.planning': 'Dietary Planning',
        'education.skill.food': 'Food Science',
        'education.skill.counseling': 'Nutrition Counseling',
        'education.skill.public': 'Public Health Nutrition',
        
        // Expertise Section
        'expertise.title': 'Areas of Expertise',
        'expertise.fertility.title': '👶 Infertility & Preconception Care',
        'expertise.fertility.desc': 'Specialized nutritional support for couples preparing for pregnancy, optimizing fertility through evidence-informed dietary strategies, lifestyle modifications, and holistic wellness approaches tailored to your unique needs.',
        'expertise.pregnancy.title': '🤰 Pregnancy Nutrition',
        'expertise.pregnancy.desc': 'Compassionate, personalized nutrition guidance throughout pregnancy to support maternal health and fetal development, managing pregnancy-related conditions with safe, effective dietary interventions.',
        'expertise.lactation.title': '🤱 Lactation Support',
        'expertise.lactation.desc': 'Expert nutritional counseling for breastfeeding mothers, optimizing milk production, addressing common lactation challenges, and ensuring optimal nutrition for both mother and baby during this crucial period.',
        'expertise.integrative.title': '🌱 Integrative Nutrition Care',
        'expertise.integrative.desc': 'Holistic approach combining evidence-informed nutrition with positive psychology, wellness coaching, and alternative medicine principles to address the whole person—mind, body, and spirit.',
        
        // Services Section
        'services.title': 'Services Offered',
        'services.initial.title': 'Initial Consultation',
        'services.initial.desc': 'Comprehensive health assessment, nutritional analysis, and personalized recommendations based on your unique health goals and medical history.',
        'services.initial.tag1': '90 Minutes',
        'services.initial.tag2': 'In-depth Analysis',
        'services.initial.tag3': 'Custom Plan',
        'services.followup.title': 'Follow-up Sessions',
        'services.followup.desc': 'Ongoing support, progress monitoring, and plan adjustments to ensure you stay on track toward achieving your health and wellness objectives.',
        'services.followup.tag1': '45-60 Minutes',
        'services.followup.tag2': 'Progress Tracking',
        'services.followup.tag3': 'Plan Refinement',
        'services.specialized.title': 'Specialized Programs',
        'services.specialized.desc': 'Targeted protocols for gut health restoration, immune support, metabolic optimization, and chronic condition management.',
        'services.specialized.tag1': 'Customized',
        'services.specialized.tag2': 'Evidence-Based',
        'services.specialized.tag3': 'Long-term Support',
        'services.lab.title': 'Laboratory Analysis',
        'services.lab.desc': 'Interpretation of lab results, biomarker analysis, and actionable recommendations to optimize your health based on objective data.',
        'services.lab.tag1': 'Data-Driven',
        'services.lab.tag2': 'Comprehensive',
        'services.lab.tag3': 'Personalized',
        
        // Contact Section
        'contact.title': 'Book Your Consultation',
        'contact.subtitle': 'Start Your Health Journey',
        'contact.intro': 'Ready to take control of your health with evidence-based, personalized nutrition guidance? Book a consultation today and discover how targeted nutrition can transform your wellbeing.',
        'contact.book.assistant': 'Book Consultation (Assistant)',
        'contact.book.link': 'Schedule via WhatsApp',
        'contact.direct.label': 'Direct Contact - Mariana',
        'contact.direct.link': 'WhatsApp Direct',
        'contact.company.label': 'Company',
        'contact.company.value': 'NutriWhite',
        'contact.expect.title': 'What to Expect',
        'contact.expect.item1': 'Comprehensive health and nutrition assessment',
        'contact.expect.item2': 'Personalized, evidence-based recommendations',
        'contact.expect.item3': 'Ongoing support and progress monitoring',
        'contact.expect.item4': 'Access to specialized expertise in fertility, pregnancy, lactation, and holistic wellness',
        'contact.book.now': 'Book Now via WhatsApp',
        
        // Footer
        'footer.rights': '2025 MSc. Mariana White - NutriWhite. All rights reserved.',
        
        // QR Access Page
        'qr.title': 'MSc. Mariana White - Quick Access',
        'qr.heading': 'Quick Access to Mariana\'s Portfolio',
        'qr.button.main': 'View Full Portfolio & Book Consultation',
        'qr.button.copy': 'Copy Link',
        'qr.button.share': 'Share',
        'qr.button.download': 'Download QR (PNG)',
        'qr.button.print': 'Print QR',
        'qr.instructions.title': '📋 How to Access on Mobile',
        'qr.instructions.step1': '<strong>Scan the QR Code</strong> - Open your camera app and point it at the QR code above. Tap the notification to open.',
        'qr.instructions.step2': '<strong>Bookmark This Page</strong> - Tap the share button and select "Add Bookmark" for quick access later.',
        'qr.instructions.step3': '<strong>Add to Home Screen</strong> (iOS Safari) - Tap the share button, scroll down, and select "Add to Home Screen" for app-like access.',
        'qr.instructions.step4': '<strong>Android Users</strong> - Tap the three dots menu, then "Add to Home screen" for quick access.',
        'qr.footer': 'MSc. Mariana White - NutriWhite | Holistic Nutrition & Wellness Specialist',
        'qr.button.copy.success': 'Copied!',
        'qr.button.share.success': 'Link Copied'
    },
    es: {
        // Navigation
        'nav.about': 'Sobre Mí',
        'nav.education': 'Educación',
        'nav.expertise': 'Experiencia',
        'nav.services': 'Servicios',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.subtitle': 'Cofundadora y Directora, NutriWhite | Especialista en Nutrición Holística y Bienestar',
        'hero.btn.services': 'Ver Servicios',
        'hero.btn.consultation': 'Reservar una Consulta',
        'hero.scroll': 'Desplázate hacia abajo',
        
        // About Section
        'about.title': 'Sobre Mí',
        'about.lead': 'Especialista en infertilidad, embarazo y lactancia, y atención nutricional integrativa. Brinda apoyo compasivo y basado en evidencia a través de consultas en línea y presenciales.',
        'about.text1': 'Como cofundadora y directora de NutriWhite, combino formación académica avanzada con experiencia práctica para ayudar a los clientes a lograr una salud óptima a través de intervenciones nutricionales y de estilo de vida.',
        'about.text2': 'Mi enfoque holístico integra estrategias de nutrición informadas por evidencia con atención compasiva, asegurando que cada cliente reciba apoyo personalizado adaptado a su viaje de salud único, particularmente en fertilidad, embarazo y bienestar general.',
        'about.stat1': 'Certificaciones y Títulos',
        'about.stat2': 'Atención Compasiva',
        'about.stat3': 'Enfoque Holístico',
        
        // Education Section
        'education.title': 'Calificaciones Académicas',
        'education.msc.nutrition': '🎓 MSc en Nutrición Holística',
        'education.certifications': '🏆 Certificaciones Profesionales',
        'education.bsc': '🍎 Licenciatura en Nutrición y Dietética',
        'education.skill.holistic': 'Salud Holística',
        'education.skill.integrative': 'Nutrición Integrativa',
        'education.skill.wellness': 'Coaching de Bienestar',
        'education.skill.alternative': 'Medicina Alternativa',
        'education.skill.anatomy': 'Anatomía y Fisiología (Honores)',
        'education.skill.bchn': 'Nutricionista Holística Certificada',
        'education.skill.psychology': 'Diploma en Psicología Positiva',
        'education.skill.coaching': 'Certificado de Posgrado: Coaching de Bienestar',
        'education.skill.altmed': 'Certificado de Posgrado: Medicina Alternativa',
        'education.skill.assessment': 'Evaluación Nutricional',
        'education.skill.planning': 'Planificación Dietética',
        'education.skill.food': 'Ciencia de los Alimentos',
        'education.skill.counseling': 'Asesoramiento Nutricional',
        'education.skill.public': 'Nutrición de Salud Pública',
        
        // Expertise Section
        'expertise.title': 'Áreas de Experiencia',
        'expertise.fertility.title': '👶 Infertilidad y Cuidado Preconcepcional',
        'expertise.fertility.desc': 'Apoyo nutricional especializado para parejas que se preparan para el embarazo, optimizando la fertilidad a través de estrategias dietéticas informadas por evidencia, modificaciones de estilo de vida y enfoques holísticos de bienestar adaptados a sus necesidades únicas.',
        'expertise.pregnancy.title': '🤰 Nutrición durante el Embarazo',
        'expertise.pregnancy.desc': 'Orientación nutricional compasiva y personalizada durante el embarazo para apoyar la salud materna y el desarrollo fetal, manejando condiciones relacionadas con el embarazo con intervenciones dietéticas seguras y efectivas.',
        'expertise.lactation.title': '🤱 Apoyo a la Lactancia',
        'expertise.lactation.desc': 'Asesoramiento nutricional experto para madres lactantes, optimizando la producción de leche, abordando desafíos comunes de lactancia y asegurando una nutrición óptima tanto para la madre como para el bebé durante este período crucial.',
        'expertise.integrative.title': '🌱 Atención Nutricional Integrativa',
        'expertise.integrative.desc': 'Enfoque holístico que combina nutrición informada por evidencia con psicología positiva, coaching de bienestar y principios de medicina alternativa para abordar a la persona completa: mente, cuerpo y espíritu.',
        
        // Services Section
        'services.title': 'Servicios Ofrecidos',
        'services.initial.title': 'Consulta Inicial',
        'services.initial.desc': 'Evaluación integral de salud, análisis nutricional y recomendaciones personalizadas basadas en tus objetivos de salud únicos e historial médico.',
        'services.initial.tag1': '90 Minutos',
        'services.initial.tag2': 'Análisis Profundo',
        'services.initial.tag3': 'Plan Personalizado',
        'services.followup.title': 'Sesiones de Seguimiento',
        'services.followup.desc': 'Apoyo continuo, monitoreo de progreso y ajustes al plan para asegurar que te mantengas en el camino hacia tus objetivos de salud y bienestar.',
        'services.followup.tag1': '45-60 Minutos',
        'services.followup.tag2': 'Seguimiento de Progreso',
        'services.followup.tag3': 'Refinamiento del Plan',
        'services.specialized.title': 'Programas Especializados',
        'services.specialized.desc': 'Protocolos dirigidos para la restauración de la salud intestinal, apoyo inmune, optimización metabólica y manejo de condiciones crónicas.',
        'services.specialized.tag1': 'Personalizado',
        'services.specialized.tag2': 'Basado en Evidencia',
        'services.specialized.tag3': 'Soporte a Largo Plazo',
        'services.lab.title': 'Análisis de Laboratorio',
        'services.lab.desc': 'Interpretación de resultados de laboratorio, análisis de biomarcadores y recomendaciones accionables para optimizar tu salud basándose en datos objetivos.',
        'services.lab.tag1': 'Basado en Datos',
        'services.lab.tag2': 'Integral',
        'services.lab.tag3': 'Personalizado',
        
        // Contact Section
        'contact.title': 'Reserva tu Consulta',
        'contact.subtitle': 'Comienza tu Viaje de Salud',
        'contact.intro': '¿Listo para tomar el control de tu salud con orientación nutricional personalizada basada en evidencia? Reserva una consulta hoy y descubre cómo la nutrición dirigida puede transformar tu bienestar.',
        'contact.book.assistant': 'Reservar Consulta (Asistente)',
        'contact.book.link': 'Agendar vía WhatsApp',
        'contact.direct.label': 'Contacto Directo - Mariana',
        'contact.direct.link': 'WhatsApp Directo',
        'contact.company.label': 'Empresa',
        'contact.company.value': 'NutriWhite',
        'contact.expect.title': 'Qué Esperar',
        'contact.expect.item1': 'Evaluación integral de salud y nutrición',
        'contact.expect.item2': 'Recomendaciones personalizadas basadas en evidencia',
        'contact.expect.item3': 'Apoyo continuo y monitoreo de progreso',
        'contact.expect.item4': 'Acceso a experiencia especializada en fertilidad, embarazo, lactancia y bienestar holístico',
        'contact.book.now': 'Reservar Ahora vía WhatsApp',
        
        // Footer
        'footer.rights': '2025 MSc. Mariana White - NutriWhite. Todos los derechos reservados.',
        
        // QR Access Page
        'qr.title': 'MSc. Mariana White - Acceso Rápido',
        'qr.heading': 'Acceso Rápido al Portafolio de Mariana',
        'qr.button.main': 'Ver Portafolio Completo y Reservar Consulta',
        'qr.button.copy': 'Copiar Enlace',
        'qr.button.share': 'Compartir',
        'qr.button.download': 'Descargar QR (PNG)',
        'qr.button.print': 'Imprimir QR',
        'qr.instructions.title': '📋 Cómo Acceder desde el Móvil',
        'qr.instructions.step1': '<strong>Escanea el Código QR</strong> - Abre la aplicación de cámara y apúntala al código QR de arriba. Toca la notificación para abrir.',
        'qr.instructions.step2': '<strong>Guarda esta Página</strong> - Toca el botón de compartir y selecciona "Añadir Marcador" para acceso rápido más tarde.',
        'qr.instructions.step3': '<strong>Añadir a Pantalla de Inicio</strong> (iOS Safari) - Toca el botón compartir, desplázate hacia abajo y selecciona "Añadir a pantalla de inicio" para acceso tipo app.',
        'qr.instructions.step4': '<strong>Usuarios Android</strong> - Toca el menú de tres puntos, luego "Añadir a pantalla de inicio" para acceso rápido.',
        'qr.footer': 'MSc. Mariana White - NutriWhite | Especialista en Nutrición Holística y Bienestar',
        'qr.button.copy.success': '¡Copiado!',
        'qr.button.share.success': 'Enlace Copiado'
    }
};

let currentLanguage = 'en';

// Detect browser language
export function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    // Check if browser language starts with 'es' (Spanish)
    if (browserLang.toLowerCase().startsWith('es')) {
        return 'es';
    }
    return 'en';
}

// Get saved language or detect browser language
export function getInitialLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
        return savedLang;
    }
    return detectBrowserLanguage();
}

// Set current language
export function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'es') {
        console.warn(`Unsupported language: ${lang}. Defaulting to English.`);
        lang = 'en';
    }
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.setAttribute('lang', lang);
}

// Get translation for a key
export function translate(key) {
    return translations[currentLanguage][key] || key;
}

// Get current language
export function getCurrentLanguage() {
    return currentLanguage;
}

// Get WhatsApp link based on current language
export function getWhatsAppLink(type) {
    const links = {
        en: {
            assistant: 'https://api.whatsapp.com/send?phone=584128574606&text=Hi,%20I%20come%20from%20Mariana\'s%20QR%20code,%20I%20want%20a%20consultation%20with%20her',
            direct: 'https://api.whatsapp.com/send?phone=13058900494&text=Hi%20Mariana,%20I%20come%20from%20your%20QR%20code'
        },
        es: {
            assistant: 'https://api.whatsapp.com/send?phone=584128574606&text=Hola,%20vengo%20del%20QR%20de%20Mariana,%20quiero%20un%20plan%20de%20consultas%20con%20ella',
            direct: 'https://api.whatsapp.com/send?phone=13058900494&text=Hola%20Mariana,%20vengo%20de%20tu%20pagina%20con%20tu%20codigo%20QR'
        }
    };
    return links[currentLanguage][type];
}

// Update all translatable elements on the page
export function updatePageTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translate(key);
        
        // Update text content or placeholder based on element type
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else if (element.tagName === 'TITLE') {
            element.textContent = translation;
        } else {
            // Check if translation contains HTML tags
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update WhatsApp links
    updateWhatsAppLinks();
}

// Update WhatsApp links based on current language
function updateWhatsAppLinks() {
    const whatsappLinks = document.querySelectorAll('[data-whatsapp]');
    whatsappLinks.forEach(link => {
        const type = link.getAttribute('data-whatsapp');
        const url = getWhatsAppLink(type);
        if (url) {
            link.href = url;
        }
    });
}

// Initialize i18n
export function initI18n() {
    const initialLang = getInitialLanguage();
    setLanguage(initialLang);
    updatePageTranslations();
    
    // Create and add language toggle button
    createLanguageToggle();
}

// Create language toggle button
function createLanguageToggle() {
    // Check if we're on the main page (with navbar) or QR page
    const navbar = document.querySelector('.navbar .nav-container');
    const qrContainer = document.querySelector('.container');
    
    if (!navbar && !qrContainer) return;
    
    // Create language toggle button
    const langToggle = document.createElement('button');
    langToggle.className = 'lang-toggle';
    langToggle.id = 'langToggle';
    langToggle.setAttribute('aria-label', 'Toggle Language');
    langToggle.title = currentLanguage === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés';
    langToggle.innerHTML = `<span class="lang-flag">${currentLanguage === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}</span>`;
    
    // Add click handler
    langToggle.addEventListener('click', () => {
        const newLang = currentLanguage === 'en' ? 'es' : 'en';
        setLanguage(newLang);
        updatePageTranslations();
        
        // Update button
        langToggle.innerHTML = `<span class="lang-flag">${newLang === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}</span>`;
        langToggle.title = newLang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés';
    });
    
    // Insert in appropriate location
    if (navbar) {
        // Main page: insert before mobile menu button
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenuBtn) {
            navbar.insertBefore(langToggle, mobileMenuBtn);
        } else {
            navbar.appendChild(langToggle);
        }
    } else if (qrContainer) {
        // QR page: append to body (it's positioned fixed via CSS)
        document.body.appendChild(langToggle);
    }
}
