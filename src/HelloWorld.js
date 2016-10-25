import React, {Component} from 'react';
import './HelloWorld.css';


class HelloWorld extends Component{

	constructor(props) {
		super(props);
		this.state = {greeting: "Hello"};
		this.frenchify = this.frenchify.bind(this)
		this.removeGreeter = this.removeGreeter.bind(this)
	}

	frenchify(){
		if(this.state.greeting !== "Hello"){
			this.setState({greeting: "Hello"});
		} else {
			this.setState({greeting: "Bonjour"});
		}
		
	}

	removeGreeter(){
		this.props.removeGreeter(this.props.name)
	}

	render(){
	return(
		<div className="hello-world">
			<h3>This is {this.props.name} saying {this.state.greeting}!</h3>
			<button onClick={this.frenchify}>Change Language!</button>
			<button onClick={this.removeGreeter}>Remove</button>
		</div>

	);
	}
}

export default HelloWorld;