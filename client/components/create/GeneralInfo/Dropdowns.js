import Dropdown from './Dropdown';
import styled from 'styled-components';

const Dropdowns = () => (
	<DropContainer>
		<SingleDrop>
			<DropDescription>From</DropDescription>
			<Dropdown defaultLang={'pl'} />
		</SingleDrop>
		<SingleDrop>
			<DropDescription>To</DropDescription>
			<Dropdown defaultLang={'en'} />
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

const DropDescription = styled.p`
	font-size: 24px;
	margin-right: 1rem;
`;

export default Dropdowns;
