import '../../Themes/Pages/Auth/AuthPages.scss';
import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';

const SignUp = () => {
	return (
		<div className="AuthPage">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Sign In</h5>
					<h6 className="card-subtitle mb-2 text-body-secondary">
						Welcome back. Sign in below.
					</h6>
					<div className="input-group input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Email
						</span>
						<input
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
						/>
					</div>
					<div className="input-group input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Password
						</span>
						<input
							type="password"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
						/>
					</div>
				</div>
				<span className="ButtonContainer">
					<button type="button" className="btn btn-secondary">
						Secondary
					</button>
					<button type="button" className="btn btn-primary">
						Primary
					</button>
				</span>
				<p>
					Don't have an account? <a>Register here</a>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
