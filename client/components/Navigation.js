import Link from 'next/link';
import styled from 'styled-components';

const Navigation = () => (
	<Nav>
		<ul>
			<li>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href='/create'>
					<a>Create new</a>
				</Link>
			</li>
		</ul>
	</Nav>
);

const Nav = styled.nav`
	ul {
		margin-bottom: 2rem;
		height: 2rem;
		flex-direction: row;
		align-items: center;
		display: flex;
		list-style: none;
		li {
			margin-right: 10px;
		}
	}
	a {
		text-decoration: none;
	}
`;

export default Navigation;
