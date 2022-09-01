const express = require('express');
const config = require('./config')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(config.PORT, () => console.log(`Соединение с сервером прошло успешно PORT: ${config.PORT}`));