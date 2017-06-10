import React from 'react'

// Components
import Post from './Post'

// libs
import $ from 'jquery'

// css
import './styles/Grid.css'

class Grid extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			posts: []
		}
		this.fetchPosts()

	}

	componentDidMount() {
	}

	fetchPosts = () => {
		  
		  var url = "https://react-like-a-boss-shadid121.c9users.io/posts"
		  
		  $.ajax({
		    type: "GET",
		    url: url,
		    success: (data) => {
		    	this.setState({ posts: data })
		    }
		  })
	}

	render(){
		return(

<div className="container" id="posts">
	<div className="row">
   	<div className="col-md-12 flex-container">	
	   	{this.state.posts.map((p) =>
        	<Post key={p.id}
                  aPost={p} />
      	)}
	
	</div>
  	</div>
</div>


		)
	}
}
export default Grid