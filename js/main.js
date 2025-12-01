// ===========================
// Main Entry Point
// ===========================

import { initNavigation } from './navigation.js';
import { initSmoothScroll } from './smoothScroll.js';
import { initAnimations } from './animations.js';
import { initI18n } from './i18n.js';

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initNavigation();
    initSmoothScroll();
    initAnimations();
});
