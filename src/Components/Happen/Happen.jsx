import './Happen.scss';
import content from '../../Localization/Content';
import imageperson from '../../Assets/image/Ellipse 3.png';
import galleryimg from '../../Assets/image/Vector.svg';
import gifimg from '../../Assets/image/Vector (1).svg';
import statsimg from '../../Assets/image/Vector (2).svg';
import smilesimg from '../../Assets/image/Vector (3).svg';
import dataimg from '../../Assets/image/Group.svg';

function Happen({lang}) {
	return (
		<section className='Happen'>
			<div className='container'>
				<div className='happen__box'>
					<div className='box'>
						<img
							className='user__img'
							src={imageperson}
							alt='person img'
							width='60'
							height='60'
						/>

						<textarea
							className='text'
							cols={40}
							rows={2}
							placeholder={content[lang].main.Home.Placeholder}
						/>
					</div>

					<span className='send__box'>
						<img
							className='send__img'
							src={galleryimg}
							alt='gallery'
							width='20'
							height='20'
						/>
						<img
							className='send__img'
							src={gifimg}
							alt='gallery'
							width='20'
							height='20'
						/>
						<img
							className='send__img'
							src={statsimg}
							alt='gallery'
							width='20'
							height='20'
						/>
						<img
							className='send__img'
							src={smilesimg}
							alt='gallery'
							width='20'
							height='20'
						/>
						<img
							className='send__img'
							src={dataimg}
							alt='gallery'
							width={20}
							height={20}
						/>
					</span>

					<button className='send__btn'>Tweet</button>
				</div>
			</div>
		</section>
	);
}

export default Happen;
