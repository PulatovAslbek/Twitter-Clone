import React from 'react';
import './TrendBox.scss';
import content from '../../Localization/Content';
import settingimg from '../../Assets/image/settings.svg';

function TrendBox({lang}) {
	return (
		<div className='servise'>
			<div className='setting'>
				<h2 className='heading__setting'>{content[lang].footer.Trends}</h2>

				<button className='setting-__btn'>
					<img src={settingimg} alt='settings img' />
				</button>
			</div>

			<ul className='setting__list'>
				<li className='setting__item'>
					<div className='setting__item-box'>
						<span className=''>{content[lang].footer.Trending}</span>
						<strong className=''>
							{content[lang].footer.Revolution}
						</strong>
						<span className=''>{content[lang].footer.Tweets}</span>
					</div>

					<strong className='point'>...</strong>
				</li>

				<li className='setting__item'>
					<div className='setting__item-box'>
						<span className=''>{content[lang].footer.Trending}</span>
						<strong className=''>
							{content[lang].footer.Revolution}
						</strong>
						<span className=''>{content[lang].footer.Tweets}</span>
					</div>

					<strong className='point'>...</strong>
				</li>

				<li className='setting__item'>
					<div className='setting__item-box'>
						<span className=''>{content[lang].footer.Trending}</span>
						<strong className=''>
							{content[lang].footer.Revolution}
						</strong>
						<span className=''>{content[lang].footer.Tweets}</span>
					</div>

					<strong className='point'>...</strong>
				</li>
			</ul>

			<span className='setting-more'>{content[lang].footer.More}</span>
		</div>
	);
}

export default TrendBox;
