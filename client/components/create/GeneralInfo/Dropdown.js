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

export default ({ defaultLang, langId }) => (
	<Choice id={langId} defaultValue={defaultLang}>
		{languages.map(lang => (
			<option value={lang.value} key={lang.value}>
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
