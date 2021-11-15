import React from "react";
import './ProfileFooter.scss';
import TrendBox from "../TrendBox/TrendBox";
import UsersBox from '../UsersBox/UsersBox';
import FooterSearch from '../FooterSearch/FooterSearch';
import FooterImagesBox from "../FooterImagesBox/FooterImagesBox";

function ProfileFooter({ lang }) {
	return (
		<footer className='footer'>
			<div className='container'>
				<FooterSearch lang={lang} />

				<FooterImagesBox />

				<UsersBox lang={lang} />

				<TrendBox lang={lang} />
			</div>
		</footer>
	);
}

export default ProfileFooter;
