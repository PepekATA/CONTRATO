const App = {
  init() {
    Language.init();
    Navigation.init();
  },
  
  changeLanguage(lang) {
    Language.change(lang);
  }
};

window.addEventListener('DOMContentLoaded', () => App.init());
window.App = App;
window.Navigation = Navigation;
