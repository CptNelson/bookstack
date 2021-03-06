import React from 'react';
import Booklist from './Components/Booklist';
import BookForm from './Components/BookForm';
import { DataContextProvider } from './Contexts/ContextProvider';

const App = () => {
	return (
		<div className="container">
			<header className="header">
				<h1 className="heading-primary u-center-text">
					Bookstack Client
				</h1>
			</header>
			<main className="main-container">
				<DataContextProvider>
					<BookForm />
					<Booklist />
				</DataContextProvider>
			</main>
		</div>
	);
};

export default App;
