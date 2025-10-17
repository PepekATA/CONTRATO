import { getAdminTemplate } from './administration-template.js';
import { downloadPDF, downloadImage, downloadExcel } from '../../js/export.js';

// Inicializar fecha actual
document.getElementById('admin_date').value = new Date().toISOString().split('T')[0];

window.generateAdminAgreement = function() {
    const data = {
        publisher: document.getElementById('admin_publisher').value || '[PUBLISHER NAME]',
        writer: document.getElementById('admin_writer').value || '[WRITER NAME]',
        date: document.getElementById('admin_date').value || '[DATE]',
        commission: document.getElementById('admin_commission').value || '20',
        term: document.getElementById('admin_term').value || '5',
        territory: document.getElementById('admin_territory').value || 'Worldwide'
    };
    
    const content = getAdminTemplate(data);
    document.getElementById('admin_preview').textContent = content;
    document.getElementById('admin_preview').style.display = 'block';
};

// Exponer funciones de exportación
window.downloadPDF = (type) => downloadPDF(type, 'admin_preview');
window.downloadImage = (type) => downloadImage(type, 'admin_preview');
window.downloadExcel = (type) => downloadExcel(type, 'admin_preview');