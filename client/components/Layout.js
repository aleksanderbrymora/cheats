import Navigation from './Navigation';
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';

const Layout = ({ children, title }) => (
	<ThemeProvider theme={colors}>
		<Container>
			<Head>
				<title>{title} | Cheats</title>
			</Head>
			<Navigation />
			{children}
			<style jsx global>{`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}
				body {
					min-height: 100vh;
					padding: 10px;
					background-color: ${colors.grayLight};
				}
				html {
					--scrollbarBG: ${colors.grayLight};
					--thumbBG: ${colors.pinkAccent};
				}
				body::-webkit-scrollbar {
					width: 11px;
				}
				body {
					scrollbar-width: thin;
					scrollbar-color: var(--thumbBG) var(--scrollbarBG);
				}
				body::-webkit-scrollbar-track {
					background: var(--scrollbarBG);
				}
				body::-webkit-scrollbar-thumb {
					background-color: var(--thumbBG);
					border-radius: 6px;
					border: 3px solid var(--scrollbarBG);
				}
			`}</style>
		</Container>
	</ThemeProvider>
);

const colors = {
	white: '#ffffff',
	blackMain: '#011826',
	grayLight: '#fcfcfc',
	blueLight: '#73CFD9',
	grayDarker: '#859CA6',
	pinkAccent: '#F26389',
};

const Container = styled.div`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		scrollbar-color: ${props => props.theme.pinkAccent};
	}
	max-width: 1080px;
	margin: auto;
	font-family: Arial, Helvetica, sans-serif;
`;

export default Layout;
