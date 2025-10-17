const Export = {
  pdf(content, filename) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(content, 180);
    
    let y = 10;
    lines.forEach(line => {
      if (y > 280) {
        doc.addPage();
        y = 10;
      }
      doc.text(line, 10, y);
      y += 7;
    });
    
    doc.save(`${filename}_${Date.now()}.pdf`);
  },
  
  image(content, filename) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 1200;
    canvas.height = 1600;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.font = '14px Courier New';
    
    const lines = content.split('\n');
    let y = 30;
    
    lines.forEach(line => {
      if (y < canvas.height - 20) {
        ctx.fillText(line, 20, y);
        y += 20;
      }
    });
    
    canvas.toBlob(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${filename}_${Date.now()}.jpg`;
      a.click();
    }, 'image/jpeg');
  },
  
  excel(content, filename) {
    const lines = content.split('\n').map(line => [line]);
    const ws = XLSX.utils.aoa_to_sheet(lines);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Agreement");
    XLSX.writeFile(wb, `${filename}_${Date.now()}.xlsx`);
  }
};
