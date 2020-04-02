import styled from 'styled-components';

import Input from '../../shared/Input';
import Trash from '../../shared/Trash';

export default ({ pair, number, words, setWords }) => {
	const handleTermChange = e => {
		const newWords = [...words];
		newWords[number].term = e.target.value;
		setWords(newWords);
	};

	const handleDefinitionChange = e => {
		const newWords = [...words];
		newWords[number].definition = e.target.value;
		setWords(newWords);
	};

	const addBlock = e => {
		if (e.key === 'Tab' && number + 1 === words.length) {
			setWords([...words, { term: '', definition: '' }]);
		}
	};

	const deleteBlock = e => {
		if (e.key === 'Delete') handleDelete();
	};

	const handleDelete = () => {
		if (!!(words.length - 1)) {
			const newWords = [...words];
			newWords.splice(number, 1);
			setWords(newWords);
		}
	};

	return (
		<Block>
			<InfoTop>
				<p>{number + 1}</p>
				{!!(words.length - 1) && <Trash onClick={handleDelete} />}
			</InfoTop>
			<Inputs>
				<Input
					required={true}
					placeholder={'Enter the word'}
					title={'Term'}
					content={pair.term}
					handler={handleTermChange}
					deleteBlock={deleteBlock}
					number={number}
				/>
				<Input
					required={true}
					placeholder={'Enter the definition'}
					title={'Definition'}
					content={pair.definition}
					handler={handleDefinitionChange}
					addBlock={addBlock}
					deleteBlock={deleteBlock}
					number={number}
				/>
			</Inputs>
		</Block>
	);
};

const Block = styled.section`
	margin: 1rem 0;
	width: 100%;
	min-height: 8rem;
	background-color: ${({ theme }) => theme.white};
	border: 2px solid ${({ theme }) => theme.blueLight};
	padding: 1rem 1rem 0;
	border-radius: 5px;
	input {
		background-color: white;
	}
`;

const Inputs = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0;
`;

const InfoTop = styled.div`
	display: flex;
	justify-content: space-between;
`;
