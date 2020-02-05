const express = require('express');
const app = express();
const PORT = 3000;
const doc = require('./doc');

app.get('/', async (req, res) => {
	const document = await doc.generateDoc();
	res.setHeader('Content-Disposition', 'attachment; filename=Cheat.docx');
	res.send(Buffer.from(document, 'base64'));
});

app.listen(PORT, () => console.log('listening'));
