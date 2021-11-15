import React from 'react';
import Header from '../../Components/Header/Header';
import ProfileFooter from '../../Components/ProfileFooter/ProfileFooter';
import ProfileMain from '../../Components/ProfileMain/ProfileMain';

function Profile({ lang }) {
	return (
		<>
				<Header lang={lang} />

				<ProfileMain lang={lang}/>	

				<ProfileFooter lang={lang} />
		</>
	);
}

export default Profile;
