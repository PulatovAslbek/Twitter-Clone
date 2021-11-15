import React from 'react';
import Feed from './Pages/Feed/Feed';
import Profile from './Pages/Profile/Profile';
import { Routes, Route } from 'react-router-dom';

function AuthenticatedApp({ lang, setLang, Theme, setTheme }) {
	return (<>
		<Routes>
			<Route path='/' element={<Feed lang={lang} setLang={setLang} Theme={Theme} setTheme={setTheme} />}/>
			<Route path='/profile' element={<Profile lang={lang} />} />
		</Routes>
	</>);
}

export default AuthenticatedApp;
