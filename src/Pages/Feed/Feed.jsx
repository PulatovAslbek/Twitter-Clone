import React from 'react';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import Footer from '../../Components/Footer/Footer';


function Feed({lang,setLang, Theme, setTheme}) {


	return (
		<>
				<Header lang={lang} />

				<Main lang={lang} setLang={setLang} Theme={Theme} setTheme={setTheme} />

				<Footer lang={lang} />
		</>
	);
}

export default Feed;
