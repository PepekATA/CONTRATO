import { getSongwriterTemplate } from './songwriter-template.js';
import { downloadPDF, downloadImage, downloadExcel } from '../../js/export.js';

document.getElementById('song_date').value = new Date().toISOString().split('T')[0];

window.generateSongwriterAgreement = function() {
    const data = {
        publisher: document.getElementById('song_publisher').value || '[PUBLISHER NAME]',
        writer: document.getElementById('song_writer').value || '[WRITER NAME]',
        date: document.getElementById('song_date').value || '[DATE]',
        minimum: document.getElementById('song_minimum').value || '12',
        royalty: document.getElementById('song_royalty').value || '100'
    };
    
    const content = getSongwriterTemplate(data);
    document.getElementById('songwriter_preview').textContent = content;
    document.getElementById('songwriter_preview').style.display = 'block';
};

window.downloadPDF = (type) => downloadPDF(type, 'songwriter_preview');
window.downloadImage = (type) => downloadImage(type, 'songwriter_preview');
window.downloadExcel = (type) => downloadExcel(type, 'songwriter_preview');