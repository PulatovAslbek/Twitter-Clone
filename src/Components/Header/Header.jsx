import './Header.scss';
import content from '../../Localization/Content';
import imageperson from '../../Assets/image/Ellipse 3.png';
import {NavLink} from 'react-router-dom';
import useToken from '../../Hooks/useToken';


function Header({ lang }) {

	const [,setToken]= useToken();

	return (
		<header className='header'>
			<div className='container'>
				<a className='header__logo-link' href='/'>
					<img
						className='header__logo-img'
						src='https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png'
						alt='twitter logo'
						width='40'
						height='33'
					/>
				</a>

				<nav className='header__nav'>
					<ul className='nav__list'>
						<li className='nav__item'>
							<NavLink to='/' className='nav__link' >
								{content[lang].header.links.Home}
							</NavLink>
						</li>

						<li className='nav__item'>
							<NavLink to='/explore' className='nav__link' >
								{content[lang].header.links.Explore}
							</NavLink>
						</li>

						<li className='nav__item'>
							<NavLink to='/notifications' className='nav__link' >
								{content[lang].header.links.Notifications}
							</NavLink>
						</li>

						<li className='nav__item'>
							<NavLink to='/messages' className='nav__link' >
								{content[lang].header.links.Messages}
							</NavLink>
						</li>

						<li className='nav__item'>
							<NavLink to='/bookmarks' className='nav__link' >
								{content[lang].header.links.Bookmarks}
							</NavLink>
						</li>

						<li className='nav__item'>
							<NavLink to='/lists' className='nav__link' >
								{content[lang].header.links.Lists}
							</NavLink>
						</li>

						<li className='nav__item'>
							<NavLink to='/profile' className='nav__link' >
								{content[lang].header.links.Profile}
							</NavLink>
						</li>

						<li className='nav__item'>
							<NavLink to='/more' className='nav__link'>
								{content[lang].header.links.More}
							</NavLink>
						</li>
					</ul>

					<button className='nav__btn'>
						<a className='btn__link' href='#link'>
							Tweet
						</a>
					</button>

					<button className='nav__logout-btn' onClick={()=>{
						setToken(false)
					}}>{content[lang].header.links.logout}</button>
				</nav>

				<div className='user'>
					<img
						className='user__img'
						src={imageperson}
						alt='person'
						width='50'
						height='50'
					/>
					<div>
						<span className='user__name'>Bobur</span>
						<span className='user__email'>@bobur_mavlonov</span>
					</div>
					<strong className='points'>...</strong>
				</div>
			</div>
		</header>
	);
}

export default Header;
