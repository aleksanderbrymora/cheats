import styled from 'styled-components';

export default () => (
	<ImportFromFile>+ Import from a text file...</ImportFromFile>
);

const ImportFromFile = styled.button`
	background: none;
	border: none;
	margin-top: 1rem;
	color: ${props => props.theme.blackMain};
	transition: color 0.1s ease-in-out;
	&:hover {
		color: ${props => props.theme.pinkAccent};
	}
	font-size: 14px;
	cursor: pointer;
`;
