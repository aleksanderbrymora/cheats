import styled from 'styled-components';

export default ({ setWords, words }) => (
	<Add
		aria-label='Add another field'
		onClick={() => setWords([...words, { term: '', definition: '' }])}
	>
		<PlusButton>
			<PlusSVG />
		</PlusButton>
		<div>
			<p>Add another one</p>
			<small>...or just press tab</small>
		</div>
	</Add>
);

const Add = styled.button`
	padding: 5px;
	margin: 2rem 0;
	display: flex;
	flex-direction: row;
	width: 10rem;
	background-color: ${props => props.theme.grayLight};
	border: none;
	cursor: pointer;
	div:nth-child(2) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		p {
			font-weight: bold;
		}
		small {
			margin-top: 5px;
			font-size: 10px;
		}
	}
`;

const PlusButton = styled.div`
	--plus-size: 30px;
	background-color: ${props => props.theme.pinkAccent};
	width: var(--plus-size);
	height: var(--plus-size);
	padding: 5px;
	border-radius: 50%;
	margin-right: 0.5rem;
	svg {
		width: 100%;
		height: 100%;
	}
`;

const PlusSVG = () => (
	<svg
		aria-hidden='true'
		focusable='false'
		data-prefix='fas'
		data-icon='plus'
		className='svg-inline--fa fa-plus fa-w-14'
		role='img'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 448 512'
	>
		<path
			fill='white'
			d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'
		></path>
	</svg>
);
