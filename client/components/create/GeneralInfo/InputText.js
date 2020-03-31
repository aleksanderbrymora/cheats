import styled from 'styled-components';

const Input = ({
	required,
	title,
	placeholder,
	handler,
	autofocus,
	content,
}) => (
	<CheatInput>
		<input
			value={content}
			autoFocus={autofocus}
			onChange={e => handler(e.target.value)}
			required={required}
			placeholder={placeholder}
		/>
		<p>{title}</p>
	</CheatInput>
);

const CheatInput = styled.div`
	--padding-main: 0.5rem 0;
	margin: 1rem 0;
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
	p {
		padding: var(--padding-main);
		text-transform: uppercase;
		font-size: 12px;
	}
`;

export default Input;
