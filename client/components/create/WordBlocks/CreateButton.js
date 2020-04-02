import styled from 'styled-components';
import axios from 'axios';

export default ({ words, createButtonRef }) => {
	const checkForEmpty = () => {
		let contains = false;
		words.map(pair => {
			if (Object.values(pair).includes('')) contains = true;
		});
		return contains;
	};

	const sanitizeWords = () =>
		words.filter(pair => !Object.values(pair).includes(''));

	const sendWords = () => {
		let finalWords = !checkForEmpty() ? words : sanitizeWords();

		try {
			axios.post('http://localhost:3000/api/docx', finalWords);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<Button ref={createButtonRef} onClick={sendWords}>
			<p>Create</p>
			<small>...or just press enter</small>
		</Button>
	);
};

const Button = styled.button`
	background-color: white;
	border: 2px solid ${({ theme }) => theme.blueLight};
	padding: 10px 25px;
	border-radius: 5px;
	color: ${({ theme }) => theme.blackMain};
	font-size: 18px;
	margin-bottom: 2rem;
	p {
		font-weight: bold;
	}
	small {
		font-size: 10px;
	}
`;
