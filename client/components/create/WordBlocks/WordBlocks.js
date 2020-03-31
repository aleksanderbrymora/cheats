import styled from 'styled-components';

import Block from './Block';
import Add from './AddAnother';

export default ({ setWords, words }) => (
	<BlocksContainer>
		{words.map((pair, index) => (
			<Block key={index} number={index + 1} pair={pair} />
		))}
		<Add />
	</BlocksContainer>
);

const BlocksContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: auto;
	margin-top: 3rem;
	align-items: center;
`;
