import { getLetterTemplate } from './letter-template.js';
import { downloadPDF, downloadImage, downloadExcel } from '../../js/export.js';

document.getElementById('letter_date').value = new Date().toISOString().split('T')[0];

window.generateLetter = function() {
    const data = {
        writer: document.getElementById('letter_writer').value || '[WRITER NAME]',
        publisher: document.getElementById('letter_publisher').value || '[PUBLISHER NAME]',
        pro: document.getElementById('letter_pro').value || '[PRO]',
        date: document.getElementById('letter_date').value || '[DATE]',
        address: document.getElementById('letter_address').value || '[WRITER ADDRESS]'
    };
    
    const content = getLetterTemplate(data);
    document.getElementById('letter_preview').textContent = content;
    document.getElementById('letter_preview').style.display = 'block';
};

window.downloadPDF = (type) => downloadPDF(type, 'letter_preview');
window.downloadImage = (type) => downloadImage(type, 'letter_preview');
window.downloadExcel = (type) => downloadExcel(type, 'letter_preview');