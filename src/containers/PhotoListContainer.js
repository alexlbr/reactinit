import React, {Component} from 'react';
import PhotoListPage from '../components/PhotoListPage'

class PhotoListContainer extends Component {

	constructor() {
		super();
		this.state = {photos: []};
		this.showPhotoDetail = this.showPhotoDetail.bind(this);
	}

	showPhotoDetail(photo) {
		console.log('HAPPENS');
		this.context.router.push(`/photos/${photo.id}`);
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/photos', {
			method: 'get'
		}).then((response) => {
			return response.json()
		}).then((data) => {
			this.setState({photos: data.slice(0,10)})
		}).catch((error) => {
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
