import styled from 'styled-components';
import InputText from './InputText';
import Dropdowns from './Dropdowns';

export default ({ setTitle, setDescription, title, description }) => (
	<>
		<CheatData>
			<InputText
				content={title}
				autofocus={true}
				handler={setTitle}
				required={true}
				title={'Title'}
				placeholder={'Enter a title'}
			/>
			<InputText
				content={description}
				autofocus={false}
				handler={setDescription}
				required={false}
				title={'Description'}
				placeholder={'Enter a description'}
			/>
			<Dropdowns />
		</CheatData>
	</>
);

const CheatData = styled.form`
	max-width: 30rem;
`;
