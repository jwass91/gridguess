import React, { Component } from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

export default class Navbar extends Component {
	render () {
		return (
			<div>
				<AppBar position="static" color="primary">
			        <Toolbar>
			        	<Typography variant="h6" color="inherit">
			            	GridGuess
			          	</Typography>
			        </Toolbar>
			     </AppBar>
			</div>
		)
	}
}