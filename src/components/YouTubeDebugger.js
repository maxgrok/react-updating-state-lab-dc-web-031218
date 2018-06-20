// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			errors: [],
			user: null, 
			settings: {
				bitrate: 8,
				video: { resolution: '1080p'}
			}
		}
	}

	resolution = () => {
		this.setState({
			settings:{
				...this.state.settings,
				video: { resolution: '720p'}
			}
		})
	}

	bitrate = () =>{
		this.setState({
			settings:{
				...this.state.settings,
				bitrate: 12
			}
		})
	}
	render(){
		return(
			<div>
				<button onClick={this.bitrate} className="bitrate">Change Bitrate</button>
				<button onClick={this.resolution} className="resolution">Change Resolution to 720</button>
			</div>
			)
	}
}

export default YouTubeDebugger;