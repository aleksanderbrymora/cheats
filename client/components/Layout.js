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
					background-color: #fcfcfc;
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
	}
	max-width: 1080px;
	margin: auto;
	font-family: Arial, Helvetica, sans-serif;
`;

export default Layout;
