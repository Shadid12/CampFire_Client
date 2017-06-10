import React from 'react'

// css
import './styles/Grid.css'

class Grid extends React.Component{
	render(){
		return(

<div className="container">
	<div className="columns">
	  <div className="column">
	    

<div className="card">
  <div className="card-content">
    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <small>11:09 PM - 1 Jan 2016</small>
    </div>
  </div>
  <footer className="card-footer">
    <a className="card-footer-item">Read More</a>
  </footer>
</div>



	  </div>
	  <div className="column">


<div className="card">
  <div className="card-content">
    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <small>11:09 PM - 1 Jan 2016</small>
    </div>
  </div>
  <footer className="card-footer">
    <a className="card-footer-item">Read More</a>
  </footer>
</div>
	
	</div>
  	</div>
</div>

		)
	}
}
export default Grid