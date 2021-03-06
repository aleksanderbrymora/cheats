import { useState, useRef } from 'react';
import { withSession } from 'next-session';

import Layout from '../components/Layout';
import CheatForm from '../components/create/GeneralInfo/Form';
import ImportFromFile from '../components/create/GeneralInfo/ImportFromFile';
import WordBlocks from '../components/create/WordBlocks/WordBlocks';
import Modal from '../components/create/GeneralInfo/Modal';

const Create = () => {
	const mainRef = useRef(null);
	const modalRef = useRef(null);
	const importRef = useRef(null);

	const [displayModal, setDisplayModal] = useState(false);
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
		{
			term: '',
			definition: '',
		},
	]);

	return (
		<Layout title={'Create'}>
			<main ref={mainRef} aria-hidden={'false'}>
				<GeneralInfo
					title={title}
					description={description}
					setTitle={setTitle}
					setDescription={setDescription}
					setDisplayModal={setDisplayModal}
					mainRef={mainRef}
					importRef={importRef}
				/>
				<WordBlocks setWords={setWords} words={words} />
			</main>
			{displayModal && (
				<Modal
					setWords={setWords}
					importRef={importRef}
					modalRef={modalRef}
					setDisplayModal={setDisplayModal}
				/>
			)}
		</Layout>
	);
};

const GeneralInfo = ({
	title,
	description,
	setTitle,
	setDescription,
	setDisplayModal,
	mainRef,
	importRef,
}) => {
	return (
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
			<ImportFromFile
				importRef={importRef}
				setDisplayModal={setDisplayModal}
				mainRef={mainRef}
			/>
			<style jsx>{`
				p {
					margin: 0.5rem 0;
				}
			`}</style>
		</>
	);
};

export default withSession(Create);
