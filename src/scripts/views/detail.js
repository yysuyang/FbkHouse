var tplDetail = require('../templates/detail.string');

SPA.defineView('detail', {
  html:tplDetail,
  plugins: ['delegated'],
  bindActions: {
    'back': function () {
      this.hide();
    }
  },
})