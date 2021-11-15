import React from 'react';
import './UserInfo.scss';
import content from '../../Localization/Content';

function UserInfo({lang}) {
	return (
		<section className='user-info'>
			<div className='container'>
				<div className='user-info__box'>
					<strong className='user-info__name'>Bobur</strong>
					<span className='user-info__email'>@bobur_mavlonov</span>
				</div>

				<p className='user__job-info'>
					UX&UI designer at <span className='link'>@abutechuz</span>
				</p>

				<ul className='user-info__list'>
					<li className='user-info__item'>
						<p className='user-info__item-info'>Mashag’daman</p>
					</li>

					<li className='user-info__item'>
						<p className='user-info__item-info'>
							<span className='link'>t.me/boburjon_mavlonov</span>
						</p>
					</li>

					<li className='user-info__item'>
						<p className='user-info__item-info'>Born November 24, 2000</p>
					</li>

					<li className='user-info__item'>
						<p className='user-info__item-info'>Joined May 2020</p>
					</li>
				</ul>

            <ul className='user-info__list-follows'>
               <li className='user-info__item-follows'>
                  <strong className='follow-num'>67</strong> <p className='user-info__info-follows'> {content[lang].main.profile.Following}</p>
               </li>

               <li className='user-info__item-follows'>
                  <strong className='follow-num'>47</strong>  <p className='user-info__info-follows'> {content[lang].main.profile.Follows}</p>
               </li>
            </ul>
			</div>
		</section>
	);
}

export default UserInfo;
