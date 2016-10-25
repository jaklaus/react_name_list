import React, {Component} from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {

	constructor(props){
		super(props);
		this.state = {nameList: ['Matt', 'Alyssa', 'Josh', 'Rachel']};

		this.addGreeter = this.addGreeter.bind(this);
		this.removeGreeter = this.removeGreeter.bind(this);
		
	}

	displayNames(){
		return this.state.nameList.map((name, index) => 
				
				<HelloWorld 
					key={index} 
					name={name} 
					removeGreeter={this.removeGreeter}
				/>
			)
	}

	addGreeter(newName){
		this.setState({nameList: [...this.state.nameList, newName]})
	}

	removeGreeter(removeName){
		const filteredNames = this.state.nameList.filter(name => {
			return name !== removeName;
		});
		this.setState({nameList: filteredNames});
	}

	render() {
		return(
			<div className="hello-world-list">
				<AddGreeter addGreeter={this.addGreeter}/>
				{this.displayNames()}
			</div>
		);
	}
}

export default HelloWorldList;