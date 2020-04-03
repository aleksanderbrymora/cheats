const docx = require('docx');
const withSession = require('next-session').withSession;

const prepareChildren = words => {
	const children = words.map(pair => [
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
	console.log('=======================================================');
	console.log(children);
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

	// console.log('=======================================================');
	// console.log(paragraphs[0]);

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
	// console.log(doc);

	return await docx.Packer.toBase64String(doc);
};

const handler = async (req, res) => {
	const document = await generateDoc(req.session.words);
	// console.log(document);
	try {
		res.setHeader('Content-Disposition', 'attachment; filename=Cheat.docx');
		res.status(200).send(Buffer.from(document, 'base64'));
	} catch (error) {
		res.status(500).json({ error });
	}
};

export default withSession(handler);
