import React from 'react'

// libs
import $ from 'jquery'



class Post extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			showPost: true
		}

	}

	componentDidMount() {
	}

	showPost = () => {
		console.log(this.props.aPost)
		$('#contents').html('')
		
		$('#contents').append(
			"<h1>"+ this.props.aPost.title + "</h1>"+
			"<p>"+this.props.aPost.body+"</p>"

		)
		$('#desc').fadeToggle(200);
	}

	render(){
		return(

<div className="column">
<div className="card">
  <div className="card-content">
    <div className="content">
      {this.props.aPost.title}
      <br />
      <small>{this.props.aPost.created_at}</small>
    </div>
  </div>
  <footer className="card-footer">
    <a className="card-footer-item" onClick={this.showPost}>Read More</a>
  </footer>
</div>
<div id="desc">
<a id="back" onClick={ () => {
						$('#desc').fadeToggle(200)
						} }>Back</a>

<br/><br/><br/><br/>
<div id="contents"></div>

</div>
</div>

		)
	}
}

export default Post