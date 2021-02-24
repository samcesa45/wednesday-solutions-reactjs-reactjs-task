import './App.css';

import Home from './container/Home';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Favourite from './container/Favourite';

const App = (props) => {
	return (
		<div className="App">
			<div id="mySidenav" className="sidenav">
				<div className="closebtn" onClick={closeNav}>
					&times;
				</div>
				<Link to="./" onClick={closeNav}>
					Home
				</Link>
				<Link to="./favourite" onClick={closeNav}>
					Favourite
				</Link>

				{/* <SideBar open={handleOpen} close={handleClose} open={open} /> */}
			</div>
			<span className="push-menu" onClick={openNav}>
				&#9776;
			</span>
			<>
				<Route path="/" exact component={Home} />
				<Route path="/favourite" exact component={Favourite} />
			</>
		</div>
	);
};

let openNav = () => {
	document.getElementById('mySidenav').style.width = '250px';
};

let closeNav = () => {
	document.getElementById('mySidenav').style.width = '0';
};

export default App;
