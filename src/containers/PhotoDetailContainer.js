import React, {Component} from 'react';
import PhotoDetailPage from '../components/PhotoDetailPage'
import * as api from '../api/photos'

class PhotoDetailContainer extends Component {

	constructor() {
		super();
		this.state = {photo: {}};
	}

	componentDidMount() {
		api.getPhoto(this.props.params.id).then( data => {
      console.log(data)
	    this.setState({photo: data})
	  }).catch( error => {
	    console.log(error)
	  })
	}

	render() {
		return (
			<PhotoDetailPage photo={this.state.photo} />
		);
	}
}

export default PhotoDetailContainer;
