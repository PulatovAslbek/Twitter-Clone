import './Posts.scss';
import Posterone from '../Posterone/Posterone';
import Postertwo from '../Postertwo/Postertwo';
import Posterthree from '../Posterthree/Posterthree';

function Post() {
	return (
		<section className='post'>
			<div className='container'>
				<Posterone />
				<Postertwo />
				<Posterthree />
			</div>
		</section>
	);
}

export default Post;
