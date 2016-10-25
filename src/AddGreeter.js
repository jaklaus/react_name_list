import React, {Component} from 'react';
import './AddGreeter.css';

class AddGreeter extends Component{
	constructor(props) {
		super(props);

		this.state = {greeter: ''};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.addGreeter = this.addGreeter.bind(this);
		
	}

	handleUpdate(event){
		this.setState({greeter: event.target.value});
	}

	addGreeter(){
		this.props.addGreeter(this.state.greeter);
		this.setState({greeter: ''});
	}

	render() {
		return(
			<div className="add-greeter">
				<h2>Add Name</h2>
				<input 
					type="text" 
					placeholder="Enter Name"
					onChange={this.handleUpdate}
					value={this.state.greeter}
				/>
				<button onClick={this.addGreeter}>Add</button>
			</div>
			
		)
	}
}

export default AddGreeter;