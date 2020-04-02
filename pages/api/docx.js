const docx = require('docx');

const prepareChildren = words => {
	const children = [];
	words.map(pair => [
		new docx.TextRun({
			text: pair.term,
			bold: true,
		}),
		new docx.TextRun({
			text: '=',
		}),
		new docx.TextRun({
			text: pair.definition,
		}),
		new docx.TextRun({
			text: '; ',
		}),
	]);
	return children.flat();
};

const generateDoc = async words => {
	// Preparing document metadata and styles
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

	// preparing paragraphs
	const paragraphs = new Array(3).fill(
		new docx.TableCell({
			children: [
				new docx.Paragraph({
					style: 'cheat',
					// Assingning the words as children (an array of pairs of words)
					children: prepareChildren(words),
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

	return await docx.Packer.toBase64String(doc);
};

export default async (req, res) => {
	console.log(req.body);
	const document = await generateDoc(req.body);
	console.log(document);
	console.log('====== something happened ======');
	res.setHeader('Content-Disposition', 'attachment; filename=Cheat.docx');
	res.send(Buffer.from(document, 'base64'));
};
