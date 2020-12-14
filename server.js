const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static('public'));

app.listen(PORT, () => console.log('Listening at port number : ', PORT));
