import React from 'react'


class ShowPost extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.tpost.title}</h1>
				<p>{this.props.tpost.body}</p>
			</div>
		)
	}
}

export default ShowPost