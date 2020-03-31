import styled from 'styled-components';
import Input from '../GeneralInfo/InputText';

export default ({ pair, number }) => (
	<div>
		<Block>
			<InfoTop>
				<p>{number}</p>
			</InfoTop>
			<Inputs>
				<Input
					required={true}
					placeholder={'Enter the word'}
					title={'Term'}
					value={pair[0]}
				/>
				<Input
					required={true}
					placeholder={'Enter the definition'}
					title={'Definition'}
					value={pair[1]}
				/>
			</Inputs>
		</Block>
	</div>
);

const Block = styled.div`
	width: 100%;
	min-height: 8rem;
	background-color: ${props => props.theme.white};
	border: 2px solid ${props => props.theme.blueLight};
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
	align-items
`;
