const fs = require('fs');
const docx = require('docx');
const readline = require('readline');

const doc = new docx.Document();

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

docx.Packer.toBuffer(doc).then(buffer => {
	fs.writeFileSync('My Document.docx', buffer);
});

const readtxt = async () => {
	const fileStream = fs.createReadStream('input.txt');
	const words = [[], []];

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity,
	});

	for await (const line of rl) {
		const wordPair = line.split('=');
		words[0].push(wordPair[0]);
		words[1].push(wordPair[1]);
	}
	return words;
};

const genWordPair = (w1, w2) => [
	new docx.TextRun({
		text: w1,
		bold: true,
	}),
	new docx.TextRun('-'),
	new docx.TextRun({
		text: w2,
	}),
	new docx.TextRun(';'),
];
