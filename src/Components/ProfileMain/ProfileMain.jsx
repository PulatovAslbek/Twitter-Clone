import React from 'react';
import './ProfileMain.scss';
import {NavLink} from 'react-router-dom'
import ProfileHero from '../ProfileHero/ProfileHero';
import backIcon from '../../Assets/image/Arrow 1.svg';
import UserProfile from '../UserProfile/UserProfile';
import UserInfo from '../UserInfo/UserInfo';
import ProfilePosts from '../ProfilePosts/ProfilePosts';
import content from '../../Localization/Content';

function ProfileMain({ lang }) {
	return (
		<>
			<main className='profilemain'>
				<section className="box1">
						<button  className='btn__back'>
							<NavLink className="nav__Link" to="/"></NavLink>
							<img
								src={backIcon}
								alt='back Icon'
								width='20'
								height='20'
							/>
							
						</button>

						<div className='profile__box'>
							<h1 className='profile__heading'>Bobur</h1>
							<span className='tweets'>1,070 {content[lang].main.profile.Tweets}</span>
						</div>

				</section>

				<ProfileHero />

				<UserProfile lang={lang} />

				<UserInfo lang={lang} />

				<ProfilePosts lang={lang} />
			</main>
		</>
	);
}

export default ProfileMain;
