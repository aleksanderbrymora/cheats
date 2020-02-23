import React, { useState } from 'react';

function App() {
	const [words, setWords] = useState([['', '']]);
	const [langOne, setLangOne] = useState('');
	const [langTwo, setLangTwo] = useState('');
	const [json, setJson] = useState('');

	const addWords = () => {
		setWords([...words, [langOne, langTwo]]);
		setLangOne('');
		setLangTwo('');
	};

	return (
		<div className='App'>
			{words.map(word => (
				<div key={word[0] + word[1]}>
					<input
						onChange={e => setLangOne(e.target.value)}
						placeholder='input'
						autoFocus
					></input>
					<input
						placeholder='translate'
						onChange={e => setLangTwo(e.target.value)}
						onKeyPress={e => {
							if (e.key === 'Enter') addWords();
						}}
					></input>
				</div>
			))}
			<button onClick={() => addWords}>Add new</button>
			<br />
			<p>{langOne}</p>
			<p>{words.map(word => `${word[0]} - ${word[1]};\n`)}</p>
			<div>
				<h1>Json</h1>
				<p>{json}</p>
			</div>
			<button
				id='submit'
				onClick={() => {
					setJson(JSON.stringify(words.splice(1)));
					setLangOne('');
					setLangTwo('');
				}}
			>
				Process
			</button>
		</div>
	);
}

export default App;
