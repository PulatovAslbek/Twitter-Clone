import './Postertwo.scss';
import commentimg from '../../Assets/image/comment.svg';
import roundimg from '../../Assets/image/round fill.svg';
import likeimg from '../../Assets/image/like fill.svg';
import saveimg from '../../Assets/image/save.svg';
import statusimg from '../../Assets/image/status.svg'; 

function Postertwo() {
	return (
		<div className='post__two'>
			<div className='post__two-box'>
				<h3 className='poster__name'>
            cloutexhibition<span className='poster__email'> @RajLahoti · 22m</span>
				</h3>

				<strong className='point'>···</strong>
			</div>

			<p className='post__info'>
				YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
				Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini
				ko’rib hursand bo’ladi odam.
			</p>

         <span className='post__box-btns'>
				<button className='comment'>
					<img src={commentimg} alt='comment' width='20' height='20' />
				</button>
				<button className='round round-fll'>
					<img src={roundimg} alt='round' width='20' height='20' />5
				</button>
				<button className='like like-fll'>
					<img src={likeimg} alt='like' width='20' height='20' />9
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

export default Postertwo;
