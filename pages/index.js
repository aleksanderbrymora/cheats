import Layout from '../components/Layout';
import { withSession } from 'next-session';

const Home = () => (
	<Layout title={'Home'}>
		<div>
			<p>Nothing here yet. Go and create a new cheatsheet</p>
		</div>
	</Layout>
);

export default withSession(Home);
