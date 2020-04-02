import Layout from '../components/Layout';
import { useState } from 'react';

import CheatForm from '../components/create/GeneralInfo/Form';
import ImportFromFile from '../components/create/GeneralInfo/ImportFromFile';
import WordBlocks from '../components/create/WordBlocks/WordBlocks';

const Create = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [words, setWords] = useState([
		{
			term: 'rzeczy',
			definition: 'stuff',
		},
		{
			term: 'inne',
			definition: 'different',
		},
		{
			term: 'nie wiem',
			definition: 'dunno',
		},
	]);

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
		<h1 id={'general-information'}>Create new cheatsheet</h1>
		<p id={'general-description'}>
			Input title and description for the cheatsheet
		</p>
		<CheatForm
			title={title}
			description={description}
			setTitle={setTitle}
			setDescription={setDescription}
		/>
		<ImportFromFile />
		<style jsx>{`
			p {
				margin: 0.5rem 0;
			}
		`}</style>
	</>
);

export default Create;
