// Code DigitalClicker Component Here

import React from 'react';

class DigitalClicker extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			timesClicked: 0
		}
	}

	click = () => {
		var stateCopy = [this.state.timesClicked]
		this.setState({
			timesClicked: stateCopy[0] + 1
		})
	}

	render(){
		return(
			<div>
			<button onClick={this.click}>{this.state.timesClicked}</button>
			</div>
			)
	}

}

export default DigitalClicker;