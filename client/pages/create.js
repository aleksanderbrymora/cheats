import Layout from '../components/Layout';
import { useState } from 'react';

import CheatForm from '../components/create/GeneralInfo/Form';
import ImportFromFile from '../components/create/GeneralInfo/ImportFromFile';
import WordBlocks from '../components/create/WordBlocks/WordBlocks';

const Create = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [words, setWords] = useState([['stuff', 'more stuff']]);

	return (
		<Layout title={'Create'}>
			<GeneralInfo
				title={title}
				description={description}
				setTitle={setTitle}
				setDescription={setDescription}
			/>
			<WordBlocks setWords={setWords} words={words} />
		</Layout>
	);
};

const GeneralInfo = ({ title, description, setTitle, setDescription }) => (
	<>
		<h1>Create new cheatsheet</h1>
		<CheatForm
			title={title}
			description={description}
			setTitle={setTitle}
			setDescription={setDescription}
		/>
		<ImportFromFile />
	</>
);

export default Create;
