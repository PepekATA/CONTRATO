window.Modules = window.Modules || {};

window.Modules.administration = {
  render() {
    return `
      <div class="module-content">
        <button class="back-btn" onclick="Navigation.showMenu()">← Volver al Menú</button>
        <h2>Administration Agreement</h2>
        
        <div class="info-box">
          <h3>¿Qué es?</h3>
          <p>Contrato donde el compositor autoriza a tu empresa a administrar sus derechos de autor musicales.</p>
        </div>
        
        <div class="form-group">
          <label>Editora (Publisher):</label>
          <input type="text" id="admin_publisher" placeholder="MUSIC RIGHTS ADMIN LLC">
        </div>
        
        <div class="form-group">
          <label>Nombre del Compositor:</label>
          <input type="text" id="admin_writer" placeholder="TELLO ORTIZ">
        </div>
        
        <div class="form-group">
          <label>Fecha del Contrato:</label>
          <input type="date" id="admin_date">
        </div>
        
        <div class="form-group">
          <label>Comisión de Administración (%):</label>
          <input type="number" id="admin_commission" value="20" min="0" max="50">
        </div>
        
        <div class="form-group">
          <label>Duración del Contrato (años):</label>
          <input type="number" id="admin_term" value="5" min="1" max="10">
        </div>
        
        <div class="form-group">
          <label>Territorio:</label>
          <select id="admin_territory">
            <option value="Worldwide">Mundial (Worldwide)</option>
            <option value="United States">Estados Unidos</option>
            <option value="North America">Norteamérica</option>
          </select>
        </div>
        
        <div class="action-buttons">
          <button class="btn btn-primary" onclick="window.Modules.administration.generate()">Generar Vista Previa</button>
          <button class="btn btn-success" onclick="window.Modules.administration.downloadPDF()">💾 Descargar PDF</button>
          <button class="btn btn-info" onclick="window.Modules.administration.downloadImage()">🖼️ Descargar JPG</button>
          <button class="btn btn-secondary" onclick="window.Modules.administration.downloadExcel()">📊 Abrir en Excel</button>
        </div>
        
        <div id="admin_preview" class="preview-box" style="display:none;"></div>
      </div>
    `;
  },
  
  init() {
    document.getElementById('admin_date').value = new Date().toISOString().split('T')[0];
  },
  
  generate() {
    const data = {
      publisher: document.getElementById('admin_publisher').value || '[PUBLISHER NAME]',
      writer: document.getElementById('admin_writer').value || '[WRITER NAME]',
      date: document.getElementById('admin_date').value || '[DATE]',
      commission: document.getElementById('admin_commission').value || '20',
      term: document.getElementById('admin_term').value || '5',
      territory: document.getElementById('admin_territory').value || 'Worldwide'
    };
    
    const content = this.template(data);
    const preview = document.getElementById('admin_preview');
    preview.textContent = content;
    preview.style.display = 'block';
  },
  
  template(data) {
    return `
MUSIC ADMINISTRATION AGREEMENT

This Agreement is entered into as of ${data.date} (the "Effective Date")

BETWEEN:
${data.publisher} (the "Administrator")

AND:
${data.writer} (the "Composer")

WHEREAS, Composer owns and controls certain musical compositions;
WHEREAS, Administrator desires to administer the Compositions on behalf of Composer;

NOW, THEREFORE, in consideration of the mutual covenants contained herein:

1. GRANT OF RIGHTS
Composer hereby grants to Administrator the exclusive right to administer, license, 
collect, and enforce all rights in the Compositions throughout the Territory (${data.territory}).

2. TERM
This Agreement shall commence on the Effective Date and continue for ${data.term} years.

3. ADMINISTRATION COMMISSION
Administrator shall retain ${data.commission}% of all gross receipts collected as its 
administration fee. The remaining balance shall be paid to Composer.

4. ADMINISTRATOR'S DUTIES
Administrator shall:
- Register all Compositions with performing rights organizations (ASCAP, BMI, SESAC)
- Register with The Mechanical Licensing Collective (The MLC)
- Collect all mechanical, performance, synchronization royalties
- Issue licenses on behalf of Composer
- Provide quarterly accounting statements
- Pursue infringement claims when necessary

5. COMPOSER'S WARRANTIES
Composer represents and warrants that:
- Composer is the sole author and owner of the Compositions
- The Compositions are original works
- No third party claims exist on the Compositions
- Composer has full authority to enter into this Agreement

6. ACCOUNTING
Administrator shall provide quarterly statements within 45 days after each quarter end.
Payment shall accompany each statement.

7. TERMINATION
Either party may terminate with 90 days written notice. Upon termination, 
Administrator shall complete all pending licenses and remit final payment.

8. GENERAL PROVISIONS
This Agreement constitutes the entire agreement between the parties.
This Agreement shall be governed by the laws of the State of New York.

AGREED AND ACCEPTED:

_________________________________    Date: ______________
${data.publisher}
Administrator

_________________________________    Date: ______________
${data.writer}
Composer

Signature: _______________________
`;
  },
  
  downloadPDF() {
    const content = document.getElementById('admin_preview').textContent;
    Export.pdf(content, 'administration_agreement');
  },
  
  downloadImage() {
    const content = document.getElementById('admin_preview').textContent;
    Export.image(content, 'administration_agreement');
  },
  
  downloadExcel() {
    const content = document.getElementById('admin_preview').textContent;
    Export.excel(content, 'administration_agreement');
  }
};
