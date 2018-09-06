import React,{Component} from 'react';
import { InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';
// import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Gallery from './Gallery';

library.add(faSearch);

class Global extends Component{

	constructor(props){
		super(props);
		this.state = {
			query: 'marvel',
			items: [],
		}
	}

	search(){
		// console.log(this.state.query);
		const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=""';
		fetch(`${BASE_URL}${this.state.query}`,{method:'GET'})
			.then(response =>response.json())
			.then(json=>{
				let {items} =json;
				this.setState({items});
				console.log(this.state.items);
			});
		setTimeout(() =>{console.log(this.state.items)},3000);


		// async function fetch(){
		// 	return new Promise(resolve =>{
		// 		fetch(`${BASE_URL}${this.state.query}`,{method:'GET'})
		// 		.then(response =>response.json())
		// 		.then(json=>{
		// 			let {items} =json;
		// 			this.setState({items});
		// 			// console.log(this.state.items);
		// 			return json;
		// 		})
		// 	});     
		// }

		// 	const a = await fetch();
		
 	// 	console.log(a);
		
	}

	render(){
		return (
			<div className="container global">
				<h2>Book Explorer!</h2>
				<div>
					<InputGroup>
				        <Input type="text" placeholder="Search for a book" value={this.state.query}
				        onChange={event =>this.setState({query: event.target.value})}
				        onKeyPress = {event=>{ if (event.key === "Enter") this.search();}}
				        />
				        <InputGroupAddon addonType="prepend" onClick={() => this.search()}>
				        	{/*<ButtonGroup>*/}
						        <Button><FontAwesomeIcon icon="search" /></Button>

					      	{/*</ButtonGroup>*/}
					     </InputGroupAddon>
				    </InputGroup>
				</div>
				<Gallery items={this.state.items}/>
			</div>
		)
	}
}


	// Button.propTypes = {
	//   active: PropTypes.bool,
	//   block: PropTypes.bool,
	//   color: PropTypes.string, // default: 'secondary'
	//   disabled: PropTypes.bool,

	//   // Pass in a Component to override default button element
	//   // example: react-router Link
	//   // default: 'button'
	//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	//   // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
	//   innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	//   onClick: PropTypes.func,
	//   size: PropTypes.string
	// }



export default Global;