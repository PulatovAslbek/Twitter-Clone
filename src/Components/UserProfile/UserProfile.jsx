import React from 'react';
import './UserProfile.scss';
import profileImg from '../../Assets/image/profile.png';
import content from '../../Localization/Content';

function UserProfile({lang}) {
	return (
		<section className='UserProfile'>
			<div className='container'>
				<img
					className='profile-img'
					src={profileImg}
					alt="profile's img"
					width='150'
					height='150'
				/>
            
            <div className='edit__box'>
				<button className='profile__btn'>{content[lang].main.profile.Edit}</button>
            </div>
			</div>
		</section>
	);
}

export default UserProfile;
