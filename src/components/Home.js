import React from 'react'

// components
import Nav from '../Nav'
import Grid from './Grid'

class Home extends React.Component{
	render(){
		return(
			<div>
				<Nav />
				<Grid />
			</div>
		)
	}
}

export default Home