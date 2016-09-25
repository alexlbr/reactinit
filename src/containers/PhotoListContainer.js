import React, {Component} from 'react';
import { connect } from 'react-redux';
import PhotoListPage from '../components/PhotoListPage'
import * as api from '../api/photos'
import * as actions from '../actions/photos';

class PhotoListContainer extends Component {

	constructor() {
		super();
		this.state = {photos: []};
		this.showPhotoDetail = this.showPhotoDetail.bind(this);
	}

	showPhotoDetail(photo) {
		this.context.router.push(`/photos/${photo.id}`);
	}

	//
	componentDidMount() {
		api.getPhotos().then( data => {
	    // this.setState({photos: data.slice(0,10)})
			this.props.fetchPhotos(data.slice(0,10))
	  }).catch( error => {
	    console.log(error)
	  })
	}

	render() {
		return (
			<PhotoListPage photos={this.props.photos} showPhotoDetail={this.showPhotoDetail} />
		);
	}
}

const mapStateToProps = (state) => ({
	photos: state
});

const mapDispatchToProps = ({
	fetchPhotos: actions.getPhotos
});

PhotoListContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(PhotoListContainer);

// export default PhotoListContainer;
