import './Footer.scss';
import TrendBox from '../TrendBox/TrendBox';
import UsersBox from '../UsersBox/UsersBox';
import FooterSearch from '../FooterSearch/FooterSearch';

function Footer({ lang }) {
	return (
		<footer className='footer'>
			<div className='container'>
				<FooterSearch lang={lang} />

				<TrendBox lang={lang} />

				<UsersBox lang={lang} />
			</div>
		</footer>
	);
}

export default Footer;
