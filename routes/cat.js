var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const text = 'Hello World';
  const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(text);

  res.json([
    {
      service: "QR Code Generator",
      text: text,
      url: qrUrl
    }
  ]);
});

module.exports = router;
