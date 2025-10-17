const Language = {
  current: 'es',
  
  init() {
    this.current = localStorage.getItem('language') || 'es';
    this.update();
  },
  
  change(lang) {
    this.current = lang;
    localStorage.setItem('language', lang);
    this.update();
  },
  
  update() {
    const t = TRANSLATIONS[this.current];
    
    document.getElementById('main-title').textContent = t.mainTitle;
    document.getElementById('main-subtitle').textContent = t.mainSubtitle;
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${this.current}`).classList.add('active');
    
    // Update menu if visible
    const menu = document.getElementById('mainMenu');
    if (menu.children.length > 0) {
      Navigation.init();
    }
  },
  
  t(key) {
    const keys = key.split('.');
    let value = TRANSLATIONS[this.current];
    keys.forEach(k => value = value?.[k]);
    return value || key;
  }
};
