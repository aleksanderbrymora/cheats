const fs = require('fs');
const docx = require('docx');

// Create document
const doc = new docx.Document();

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section
doc.addSection({
	properties: {},
	children: [
		new docx.Paragraph({
			children: [
				new docx.TextRun('Hello World'),
				new docx.TextRun({
					text: 'Foo Bar',
					bold: true,
				}),
				new docx.TextRun({
					text: `\nGithub is the best`,
					bold: true,
				}),
			],
		}),
	],
});

// Used to export the file into a .docx file
docx.Packer.toBuffer(doc).then(buffer => {
	fs.writeFileSync('My Document.docx', buffer);
});

// Done! A file called 'My First Document.docx' will be in your file system.
