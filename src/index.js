import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<header>header</header>
		<section>
		<div className='row' >
			<div className='col' >
				<div className='card' >
					<img src="./images/01.png" alt="" />
					<div className="card-body">
						<h5 className="card-title">shoe 1</h5>
						<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis!</p>
					</div>
				</div>
			</div>
			<div className='col' >
				<div className='card' >
					<img src="./images/02.png" alt="" />
					<div className="card-body">
						<h5 className="card-title">shoe 2</h5>
						<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis!</p>
					</div>
				</div>
			</div>
			<div className='col' >
				<div className='card' >
					<img src="./images/03.png" alt="" />
					<div className="card-body">
						<h5 className="card-title">shoe 3</h5>
						<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis!</p>
					</div>
				</div>
			</div>
		</div>
		</section>
		<footer>footer</footer>
	</>
);
