import { getSplitSheetTemplate } from './splitsheet-template.js';
import { downloadPDF, downloadImage, downloadExcel } from '../../js/export.js';

document.getElementById('split_date').value = new Date().toISOString().split('T')[0];

window.generateSplitSheet = function() {
    const data = {
        song: document.getElementById('split_song').value || '[SONG TITLE]',
        isrc: document.getElementById('split_isrc').value || '[ISRC]',
        writer1: document.getElementById('split_writer1').value || '[WRITER NAME]',
        writerShare: document.getElementById('split_writer1_share').value || '100',
        publisher: document.getElementById('split_publisher').value || '[PUBLISHER NAME]',
        pubShare: document.getElementById('split_publisher_share').value || '100',
        date: document.getElementById('split_date').value || '[DATE]'
    };
    
    const content = getSplitSheetTemplate(data);
    document.getElementById('splitsheet_preview').textContent = content;
    document.getElementById('splitsheet_preview').style.display = 'block';
};

window.downloadPDF = (type) => downloadPDF(type, 'splitsheet_preview');
window.downloadImage = (type) => downloadImage(type, 'splitsheet_preview');
window.downloadExcel = (type) => downloadExcel(type, 'splitsheet_preview');