import React, {Component} from 'react';
import PhotoListPage from '../components/PhotoListPage'
import * as api from '../api/photos'
class PhotoListContainer extends Component {

	constructor() {
		super();
		this.state = {photos: []};
		this.showPhotoDetail = this.showPhotoDetail.bind(this);
	}

	showPhotoDetail(photo) {
		this.context.router.push(`/photos/${photo.id}`);
	}

	componentDidMount() {
		api.getPhotos().then( data => {
	    this.setState({photos: data.slice(0,10)})
	  }).catch( error => {
	    console.log(error)
	  })
	}

	render() {
		return (
			<PhotoListPage photos={this.state.photos} showPhotoDetail={this.showPhotoDetail} />
		);
	}
}


PhotoListContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
};

export default PhotoListContainer;
