const fs = require('fs');
const docx = require('docx');
const readline = require('readline');

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
	new docx.TextRun('='),
	new docx.TextRun({
		text: w2,
	}),
	new docx.TextRun('; '),
];

const genCheat = async () => {
	const words = await readtxt();
	console.log(words);
	let formattedWords = [];
	for (let i = 0; i < words[0].length; i++) {
		formattedWords = [
			...formattedWords,
			...genWordPair(words[0][i], words[1][i]),
		];
	}
	console.log(formattedWords);

	return formattedWords;
};

const generateDoc = async () => {
	const doc = new docx.Document();
	const children = await genCheat();
	doc.addSection({
		properties: {},
		children: [
			new docx.Paragraph({
				children,
			}),
		],
	});
	docx.Packer.toBuffer(doc).then(buffer => {
		fs.writeFileSync('My Document.docx', buffer);
	});
};

generateDoc();
