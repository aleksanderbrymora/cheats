import styled from 'styled-components';

const languages = [
	{
		value: 'pl',
		emoji: '🇵🇱',
		name: 'Polish',
	},
	{
		value: 'en',
		emoji: '🇬🇧',
		name: 'English',
	},
];

export default ({ defaultLang }) => (
	<Choice defaultValue={defaultLang}>
		{languages.map(lang => (
			<option
				// selected={lang.value === defaultLang}
				value={lang.value}
				key={lang.value}
			>
				{lang.emoji} {lang.name}
			</option>
		))}
	</Choice>
);

const Choice = styled.select`
	background-color: white;
	border: 2px solid ${props => props.theme.blueLight};
	padding: 5px 15px;
	border-radius: 5px;
`;
