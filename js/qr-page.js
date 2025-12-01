// ===========================
// QR Access Page Module
// ===========================

import { initI18n, translate } from './i18n.js';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize i18n first
    initI18n();
    
    // Initialize QR page functionality
    initQRPage();
});

function initQRPage() {
    // Update this URL with your actual GitHub Pages URL
    const portfolioURL = window.location.href.replace('qr-access.html', 'index.html');
    
    // Generate QR Code
    const canvas = document.getElementById('qr-canvas');
    const qr = new QRious({
        element: canvas,
        value: portfolioURL,
        size: 250,
        foreground: '#004e6f',
        background: '#ffffff'
    });

    // Actions: copy, share, download, print
    const copyBtn = document.getElementById('copy-link');
    const shareBtn = document.getElementById('share-link');
    const downloadBtn = document.getElementById('download-qr');
    const printBtn = document.getElementById('print-page');

    copyBtn?.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(portfolioURL);
            const originalText = copyBtn.textContent;
            copyBtn.textContent = translate('qr.button.copy.success');
            setTimeout(() => (copyBtn.textContent = originalText), 1500);
        } catch (e) {
            alert('Copy failed. Please copy manually: ' + portfolioURL);
        }
    });

    shareBtn?.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title: "Mariana White - Portfolio", url: portfolioURL });
            } catch {}
        } else {
            await navigator.clipboard.writeText(portfolioURL);
            const originalText = shareBtn.textContent;
            shareBtn.textContent = translate('qr.button.share.success');
            setTimeout(() => (shareBtn.textContent = originalText), 1500);
        }
    });

    downloadBtn?.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'mariana-portfolio-qr.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });

    printBtn?.addEventListener('click', () => window.print());
}
