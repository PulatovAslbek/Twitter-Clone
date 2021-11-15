import React from 'react';
import './LoginMain.scss';
import useToken from '../../Hooks/useToken';

function LoginMain() {
	const [, setState] = useToken();

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { username, userpassword } = evt.target.elements;

		setState({
			username: username.value,
			userpassword: userpassword.value,
		});
	};

	return (
		<>
			<main className='login-main'>
				<div className='container'>
					<div className='login__box'>
						<img
							className='logo'
							src='https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png'
							alt='twitter logo'
							width='50'
							height='41'
						/>

						<h1 className='login__heading'>Log in to Twitter</h1>

						<form method='POST' onSubmit={handleSubmit}>
							<input
								className='user__login'
								type='text'
								placeholder='Phone number, email address'
								name='username'
								required
							/>
							<input
								className='user__password'
								type='password'
								placeholder='Password'
								name='userpassword'
								required
							/>

							<button className='login-btn'>Log In</button>
						</form>

						<div className='btns'>
							<button className='btn'>Forgot password?</button>

							<button className='btn'>Sign up to Twitter</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default LoginMain;
