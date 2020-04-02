import styled from 'styled-components';

export default ({ words }) => (
	<Button
		onClick={() => console.log('checkForEmpty(words):', checkForEmpty(words))}
	>
		Create
	</Button>
);

const checkForEmpty = words => {
	let contains = false;
	words.map(pair => {
		if (Object.values(pair).includes('')) contains = true;
	});
	return contains;
};

const Button = styled.button`
	background-color: white;
	border: 2px solid ${({ theme }) => theme.blueLight};
	padding: 10px 25px;
	border-radius: 5px;
	color: ${({ theme }) => theme.blackMain};
	font-size: 18px;
	margin-bottom: 2rem;
`;
