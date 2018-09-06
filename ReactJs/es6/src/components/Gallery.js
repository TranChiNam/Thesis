import React, {Component} from 'react';
import BookDetails from './BookDetails';

class Gallery extends Component{




	render() {
		let alternate= 'https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-145_no_image-512.png';

		return (
			<div>
			{
				this.props.items.map((item,index)=>{
					let {title,imageLinks,infoLink} = item.volumeInfo;
					return (
						<div key={index} className="book-wrapper">
							<div className="book">
								<img className="book-img"
									src={imageLinks !== undefined ? imageLinks.thumbnail: alternate}
									alt="book image"/>
								<div className="book-text">{title}</div>
							</div>	
								<BookDetails obj={item}/>	
		
						</div>
					)
				})
			}
			</div>
		)
	}
}

export default Gallery;
