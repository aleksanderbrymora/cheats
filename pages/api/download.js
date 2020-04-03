const withSession = require('next-session').withSession;

const handler = async (req, res) => {
	req.session.words = req.body;
	console.log(req.session.words);
	res.status(200).json({ message: 'ok' });
};

export default withSession(handler);
