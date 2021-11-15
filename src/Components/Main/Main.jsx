import './Main.scss';
import React from 'react';
import Happen from '../Happen/Happen';
import Post from '../Posts/Posts';
import themeimg from '../../Assets/image/theme.svg';
import content from '../../Localization/Content';

function Main({ lang, setLang, Theme, setTheme }) {


	return (
		<>
			<main className='main'>
				<div className='container'>
					<span className='span'>
						<h1 className='heading'>{content[lang].main.Home.Home}</h1>

						<select
							className='lang__select'
							value={lang}
							onChange={(evt) => {
								setLang(evt.target.value);
								window.localStorage.setItem('lang', JSON.stringify(evt.target.value))
							}}>
							<option value='uz'>Uz</option>
							<option value='en'>En</option>
							<option value='ru'>Ru</option>
						</select>

						<button className='theme__btn' onClick={() => {
							setTheme((prev) => !prev)
							if (Theme) {
								window.document.body.classList.add('dark')
								window.localStorage.setItem('theme', JSON.stringify(Theme))
							} else if (!Theme) {
								window.document.body.classList.remove('dark')
								window.localStorage.setItem('theme', JSON.stringify(Theme))
							}
						}}>
							<img
								className='theme-img'
								src={themeimg}
								alt='theme img'
								width='25'
								height='25'
							/>
						</button>
					</span>
				</div>

				<Happen lang={lang} />

				<Post />
			</main>
		</>
	);
}

export default Main;
