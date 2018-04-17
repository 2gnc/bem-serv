const path = require('path');
const express = require('express');
const useragent = require('express-useragent');
const favicon = require('serve-favicon');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(useragent.express());

app.get('*', (req, res) => {
  if (req.useragent.isTablet || req.useragent.isMobile) {
      res.sendFile(path.resolve(path.join(__dirname, 'views'), 'touch.html'));
  } else {
      res.sendFile(path.resolve(path.join(__dirname, 'views'), 'desktop.html'));
  }
});

app.listen(process.env.PORT || 3000, () => 
    console.log(`Слушаю порт:${process.env.PORT || '3000'}`));