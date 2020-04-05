import { useRef, useEffect } from 'react';
import styled from 'styled-components';

export default ({ setDisplayModal, modalRef, importRef }) => {
	const dropdownRef = useRef(null);

	const hideModal = () => {
		setDisplayModal(false);
		document.body.style.overflow = 'auto';
		importRef.current.focus();
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		dropdownRef.current.focus();
	});

	const placeholderText = `rzeczy=stuff
inne=different
nie wiem=dunno`;

	return (
		<Modal role='dialog' aria-modal='true' ref={modalRef} aria-hidden={'false'}>
			<div onClick={hideModal} className={'overlay'} />
			<div aria-describedby={'modal-description'} className={'modal'}>
				<div className={'screenreader-text'} id={'modal-description'}>
					This is a dialog window which overlays the main content of the page.
					This modal is used to input text quickly from previously prepared
					lists of words. This dialog can be closed by pressing escape key or
					pressing anywhere outside of the box.
				</div>
				<h2>Import from text file</h2>
				<h3>Paste your text in this format:</h3>
				<FormatChoice>
					<p>Term</p>
					<select tabIndex='1' ref={dropdownRef}>
						<option>=</option>
						<option>==</option>
						<option>--</option>
					</select>
					<p>Definition</p>
				</FormatChoice>
				<PasteText tabIndex='1' placeholder={placeholderText} />
				<ImportButton tabIndex='1'>Import</ImportButton>
			</div>
		</Modal>
	);
};

const Modal = styled.div`
	.screenreader-text {
		display: none;
	}
	.overlay {
		z-index: 1;
		position: absolute;
		width: 100%;
		min-height: 100vh;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.modal {
		padding: 1rem;
		position: absolute;
		z-index: 2;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		height: 70vh;
		min-width: 550px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;

		h2 {
			margin: 1rem 0 2rem;
		}

		h3 {
			text-align: center;
			font-size: 80%;
		}
	}
`;

const FormatChoice = styled.div`
	display: flex;
	justify-content: center;
	> * {
		margin: 0.5rem;
	}
`;

const PasteText = styled.textarea`
	width: 100%;
	height: 100%;
	padding: 0.5rem;
`;

const ImportButton = styled.button`
	padding: 5px 15px;
	background-color: white;
	border: 2px solid ${({ theme }) => theme.blueLight};
	border-radius: 5px;
	margin: 1rem 0;
`;
