const fs = require('fs');
const docx = require('docx');
const readline = require('readline');

const readtxt = async () => {
	const fileStream = fs.createReadStream('input.txt');
	const words = [[], []];
	let sorted = [];

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity,
	});

	for await (const line of rl) {
		sorted.push(line);
	}
	sorted = sorted.sort();
	sorted.map(wordPair => {
		words[0].push(wordPair.split('=')[0]);
		words[1].push(wordPair.split('=')[1]);
	});
	return words;
};

const genWordPair = (w1, w2) => [
	new docx.TextRun({
		text: w1,
		bold: true,
	}),
	new docx.TextRun({
		text: '=',
	}),
	new docx.TextRun({
		text: w2,
	}),
	new docx.TextRun({
		text: '; ',
	}),
];

const genCheat = async () => {
	const words = await readtxt();
	let formattedWords = [];
	for (let i = 0; i < words[0].length; i++) {
		formattedWords = [
			...formattedWords,
			...genWordPair(words[0][i], words[1][i]),
		];
	}
	return formattedWords;
};

const generateDoc = async () => {
	const doc = new docx.Document({
		styles: {
			paragraphStyles: [
				{
					id: 'cheat',
					name: 'Cheat text',
					basedOn: 'Normal',
					quickFormat: true,
					run: {
						size: 3.5,
						font: 'Ubuntu',
					},
				},
			],
		},
	});

	const children = await genCheat();

	const paragraphs = new Array(3).fill(
		new docx.TableCell({
			children: [
				new docx.Paragraph({
					style: 'cheat',
					children,
					alignment: docx.AlignmentType.JUSTIFIED,
				}),
			],
			margins: {
				top: 10,
				bottom: 10,
				left: 10,
				right: 10,
			},
			borders: {
				top: { size: 0.5 },
				bottom: { size: 0.5 },
				left: { size: 0.5 },
				right: { size: 0.5 },
			},
		}),
	);

	const table = new docx.Table({
		rows: [
			new docx.TableRow({
				children: paragraphs,
			}),
		],
		columnWidths: new Array(3).fill(3000),
	});

	doc.addSection({
		children: [table],
	});

	docx.Packer.toBuffer(doc).then(buffer => {
		fs.writeFileSync('My Document.docx', buffer);
	});
	console.log('Done!');
};

generateDoc();
