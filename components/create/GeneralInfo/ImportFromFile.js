import styled from 'styled-components';
import { useEffect } from 'react';

export default ({ mainRef, setDisplayModal, importRef }) => {
	useEffect(() => {
		mainRef.current.setAttribute('height', '100vh');
		// mainRef.current.setAttribute('noscroll');
	});

	const displayModal = () => {
		setDisplayModal(true);
		mainRef.current.setAttribute('aria-hidden', 'true');
	};
	return (
		<ImportFromFile ref={importRef} onClick={displayModal}>
			+ Import from a text file...
		</ImportFromFile>
	);
};

const ImportFromFile = styled.button`
	background: none;
	border: none;
	margin-top: 1rem;
	color: ${(props) => props.theme.blackMain};
	transition: color 0.1s ease-in-out;
	&:hover {
		color: ${(props) => props.theme.pinkAccent};
	}
	font-size: 14px;
	cursor: pointer;
`;
