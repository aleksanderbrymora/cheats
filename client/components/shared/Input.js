import styled from 'styled-components';

const Input = ({
	required,
	title,
	placeholder,
	handler,
	autofocus,
	content,
	addBlock,
	deleteBlock,
	number,
	handleFocusOnCreate,
}) => (
	<CheatInput>
		<input
			value={content}
			autoFocus={autofocus}
			required={required}
			placeholder={placeholder}
			onChange={handler}
			onKeyDown={e => {
				if (addBlock) addBlock(e);
				if (deleteBlock) deleteBlock(e);
				if (handleFocusOnCreate) handleFocusOnCreate(e);
			}}
			id={title + number}
		/>
		<label htmlFor={title + number}>{title}</label>
	</CheatInput>
);

export const CheatInput = styled.fieldset`
	--padding-main: 0.5rem 0;
	margin: 1rem 0;
	border: none;
	input {
		width: 90%;
		border: none;
		border-bottom: 2px solid ${props => props.theme.mainBlack};
		background-color: ${props => props.theme.grayLight};
		font-size: 24px;
		padding: var(--padding-main);
		transition: border-color 0.3s ease;
		&:focus {
			outline: none;
			border-color: ${props => props.theme.pinkAccent};
		}
		::placeholder {
			color: ${props => props.theme.grayDarker};
		}
	}
	label {
		display: block;
		padding: var(--padding-main);
		text-transform: uppercase;
		font-size: 12px;
	}
`;

export default Input;
