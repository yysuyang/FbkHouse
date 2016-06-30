var tplMy = require('../templates/my.string');

SPA.defineView('my', {
  html: tplMy,
  bindEvents:{
 'show': function () {
    var lifenavScroll = this.widgets['lifenav-scroll'];
     lifenavScroll.options.scrollX = true;
     lifenavScroll.options.scrollY = false;
      console.log(11);
  }
 }
})