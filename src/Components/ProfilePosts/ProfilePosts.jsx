import React from 'react';
import './ProfilePosts.scss';
import commentimg from '../../Assets/image/comment.svg';
import roundimg from '../../Assets/image/round.svg';
import likeimg from '../../Assets/image/like.svg';
import saveimg from '../../Assets/image/save.svg';
import statusimg from '../../Assets/image/status.svg';
import roundimgFill from '../../Assets/image/round fill.svg';
import likeimgFill from '../../Assets/image/like fill.svg';
import usersImg from '../../Assets/image/img-bobur.png';
import content from '../../Localization/Content';

function ProfilePosts({lang}) {
	return (
		<section className='profile-posts'>
			<div className='container'>
				<ul className='profile-posts__list'>
					<li className='profile-posts__item profile-posts__item--active'>
					{content[lang].main.profile.Tweets}</li>
					<li className='profile-posts__item'>{content[lang].main.profile.Replies}</li>
					<li className='profile-posts__item'>{content[lang].main.profile.Media}</li>
					<li className='profile-posts__item'>{content[lang].main.profile.Likes}</li>
				</ul>

				<div className='post__one post__one--img'>
					<div className='post__one-box'>
						<h3 className='poster__name'>
							Bobur
							<span className='poster__email'>
								@bobur_mavlonov · Apr 1
							</span>
						</h3>

						<strong className='point'>···</strong>
					</div>

					<p className='post__info'>
						4-kursni tugatgunimcha kamida bitta biznesim bo'lishini,
						uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni,
						sog'lik va jismoniy holatni normallashtirishni reja qildim
					</p>

					<span className='post__box-btns'>
						<button className='comment'>
							<img
								src={commentimg}
								alt='comment'
								width='20'
								height='20'
							/>
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

				<div className='post__two post__two--img'>
					<div className='post__two-box'>
						<h3 className='poster__name'>
							Bobur
							<span className='poster__email'>
								@bobur_mavlonov · Apr 1
							</span>
						</h3>

						<strong className='point'>···</strong>
					</div>

					<p className='post__info'>
						Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima
						deyayotganimizga qarab ham o'tirmaymiz.
					</p>

					<p className='post__info'>
						Bitta biznes trener nito gapirib qo'ysa, hamma biznes
						trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida.
					</p>
					<p className='post__info'>
						Gap faqat biznes trenerlar haqida emas.
					</p>

					<span className='post__box-btns'>
						<button className='comment'>
							<img
								src={commentimg}
								alt='comment'
								width='20'
								height='20'
							/>
						</button>
						<button className='round round-fll'>
							<img
								src={roundimgFill}
								alt='round'
								width='20'
								height='20'
							/>
							5
						</button>
						<button className='like like-fll'>
							<img src={likeimgFill} alt='like' width='20' height='20' />
							9
						</button>
						<button className='save'>
							<img src={saveimg} alt='save' width='20' height='20' />
						</button>
						<button className='status'>
							<img src={statusimg} alt='status' width='12' height='20' />
						</button>
					</span>
				</div>


            <div className='post__three post__three--img'>
			<div className='post__three-box'>
				<h3 className='poster__name'>
					Bobur
					<span className='poster__email'>@bobur_mavlonov · Apr 1</span>
				</h3>

				<strong className='point'>···</strong>
			</div>

			<p className='post__info'>A bo'pti maskamasman</p>

         <img className='post__img' src={usersImg} alt="food img" width='679' height='453' />

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
			</div>
		</section>
	);
}

export default ProfilePosts;
