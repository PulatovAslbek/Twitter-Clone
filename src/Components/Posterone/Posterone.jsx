import './Posterone.scss';
import commentimg from '../../Assets/image/comment.svg';
import roundimg from '../../Assets/image/round.svg';
import likeimg from '../../Assets/image/like.svg';
import saveimg from '../../Assets/image/save.svg';
import statusimg from '../../Assets/image/status.svg';

function Posterone() {
	return (
		<div className='post__one'>
			<div className='post__one-box'>
				<h3 className='poster__name'>
					Designsta <span className='poster__email'>@inner · 25m</span>
				</h3>

				<strong className='point'>···</strong>
			</div>

			<p className='post__info'>
				Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
				zerikmadinglarmi?
			</p>

			<span className='post__box-btns'>
				<button className='comment'>
					<img src={commentimg} alt='comment' width='20' height='20' />
					10
				</button>
				<button className='round'>
					<img src={roundimg} alt='round' width='20' height='20' />1
				</button>
				<button className='like'>
					<img src={likeimg} alt='like' width='20' height='20' />8
				</button>
				<button className='save'>
					<img src={saveimg} alt='save' width='20' height='20' />
				</button>
				<button className='status'>
					<img src={statusimg} alt='status' width='12' height='20' />
				</button>
			</span>
		</div>
	);
}

export default Posterone;