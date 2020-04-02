import Dropdown from './Dropdown';
import styled from 'styled-components';

const Dropdowns = () => (
	<DropContainer>
		<SingleDrop>
			<DropDescription htmlFor={'from'}>From</DropDescription>
			<Dropdown langId={'from'} defaultLang={'pl'} />
		</SingleDrop>
		<SingleDrop>
			<DropDescription htmlFor={'to'}>To</DropDescription>
			<Dropdown langId={'to'} defaultLang={'en'} />
		</SingleDrop>
	</DropContainer>
);

const DropContainer = styled.div`
	display: flex;
	div:nth-child(2) {
		margin-left: 2rem;
	}
`;

const SingleDrop = styled.div`
	display: flex;
`;

const DropDescription = styled.label`
	display: block;
	font-size: 24px;
	margin-right: 1rem;
`;

export default Dropdowns;
