import React from 'react';
import './UsersBox.scss';
import content from '../../Localization/Content';  


function UsersBox({lang}) {
	return (
		<div className='users'>
			<h2 className='users__heading'>{content[lang].footer.Like}</h2>

			<ul className='users__list'>
				<li className='users__item'>
					<span className='users__box'>
						<strong className='user__name'>Mushtariy</strong>
						<p className='user__email'>@Mushtar565266</p>
					</span>

					<button className='follow-btn'>
						{content[lang].footer.Follow}
					</button>
				</li>

				<li className='users__item'>
					<span>
						<strong className='user__name'>Shuhratbek</strong>
						<p className='user__email'>@mrshukhrat</p>
					</span>

					<button className='follow-btn'>
						{content[lang].footer.Follow}
					</button>
				</li>
			</ul>
			<span className='setting-more'>{content[lang].footer.More}</span>
		</div>
	);
}

export default UsersBox;