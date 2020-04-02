import styled from 'styled-components';
import { useRef } from 'react';

import Block from './Block';
import Add from './AddAnother';
import CreateButton from './CreateButton';

export default ({ setWords, words }) => {
	const createButtonRef = useRef(null)
	const focusOnCreateButton = () => {
		createButtonRef.current.focus();
	};

	return (
		<BlocksContainer>
			{words.map((pair, index) => (
				<Block
					words={words}
					setWords={setWords}
					key={index}
					number={index}
					pair={pair}
					focusOnCreateButton={focusOnCreateButton}
				/>
			))}
			<Add words={words} setWords={setWords} />
			<CreateButton words={words} createButtonRef={createButtonRef} />
		</BlocksContainer>
	);
};

const BlocksContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: auto;
	margin-top: 3rem;
	align-items: center;
`;
