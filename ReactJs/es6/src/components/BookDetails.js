import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class BookDetails extends Component{

	constructor(props){
		super(props);
		console.log(props.obj);
		this.state = {
      		modal: this.props.toggle
    	};

    	this.toggle = this.toggle.bind(this);
	}

	toggle() {
	    this.setState({
	      modal: !this.state.modal
	    });
	}


	render() {
		let alternate= 'https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-145_no_image-512.png';
		let {title,subtitle, imageLinks, averageRating, previewLink}= this.props.obj.volumeInfo;


		return (
			<div>
		        <Button color="primary" onClick={this.toggle}>Info</Button>
		        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
		          <ModalHeader toggle={this.toggle}>
		          	<div className="text-center">{title}</div>
		           </ModalHeader>
		          <ModalBody>
		          	<div className="intro-modal">
			          	<img className="intro-book-img"
							src={imageLinks !== undefined ? imageLinks.thumbnail: alternate}
							alt="book image"/>
			          	<div className="intro-subtitle">{subtitle}</div>
		          	</div>
		          	<div>
		            	<strong>Author</strong>: {this.props.obj.volumeInfo.authors[0]} <br/>
		            	<strong>Average Rating</strong>: {averageRating} <br/>
		            	<strong>Link Preview</strong>: <a href={previewLink} target="_blank">{previewLink}</a>
		            </div>
		          </ModalBody>
		          <ModalFooter>
		            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
		          </ModalFooter>
		        </Modal>
		    </div>
		)
	}

}


export default BookDetails;
