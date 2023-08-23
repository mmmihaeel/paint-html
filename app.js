const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = __dirname;
const port = process.env.PORT || 3000;
const app = express();
const pagesRoutes = express.Router();

pagesRoutes.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, 'public', 'pages', 'index.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(pagesRoutes);
app.listen(port, () => {
    console.log(`Process ${process.pid}, URL http://localhost:${port}, Server is being listened on ${port}`);
});

module.exports = app;