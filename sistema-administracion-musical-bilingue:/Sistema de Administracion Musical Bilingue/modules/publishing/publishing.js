import { getPublishingTemplate } from './publishing-template.js';
import { downloadPDF, downloadImage, downloadExcel } from '../../js/export.js';

document.getElementById('pub_date').value = new Date().toISOString().split('T')[0];

window.generatePublishingAgreement = function() {
    const data = {
        publisher: document.getElementById('pub_publisher').value || '[PUBLISHER NAME]',
        writer: document.getElementById('pub_writer').value || '[WRITER NAME]',
        date: document.getElementById('pub_date').value || '[DATE]',
        type: document.getElementById('pub_type').value,
        share: document.getElementById('pub_share').value || '50'
    };
    
    const content = getPublishingTemplate(data);
    document.getElementById('publishing_preview').textContent = content;
    document.getElementById('publishing_preview').style.display = 'block';
};

window.downloadPDF = (type) => downloadPDF(type, 'publishing_preview');
window.downloadImage = (type) => downloadImage(type, 'publishing_preview');
window.downloadExcel = (type) => downloadExcel(type, 'publishing_preview');