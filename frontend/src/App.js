import React, { useState } from 'react';

function App() {
	const [words, setWords] = useState([['', '']]);
	const [langOne, setLangOne] = useState('');
	const [langTwo, setLangTwo] = useState('');
	const [json, setJson] = useState('');

	return (
		<div className='App'>
			{words.map(() => (
				<div>
					<input
						onChange={e => setLangOne(e.target.value)}
						placeholder='input'
						autoFocus
					>
						{langO}
					</input>
					<input
						placeholder='translate'
						onChange={e => setLangTwo(e.target.value)}
					></input>
				</div>
			))}
			<p>{langOne}</p>
			<p>{words.map(word => `${word[0]} - ${word[1]}; `)}</p>
			<div>
				<p>Json</p>
				<p>{json}</p>
			</div>
			<button
				onClick={() => {
					setWords([...words, [langOne, langTwo]]);
					setLangOne('');
					setLangTwo('');
				}}
			>
				Add new
			</button>
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
