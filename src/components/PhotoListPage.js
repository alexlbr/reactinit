import React from 'react';

const PhotoListPage = props => {
	const listItems = props.photos.map((photo,ix) => (
		<li key={ix} onClick={props.showPhotoDetail.bind(this, photo)}>
			<img role="presentation" src={photo.thumbnailUrl}/>
		</li>
	));
	return (
		<h1>
			<ul>
				{listItems}
			</ul>
		</h1>
	);
};


PhotoListPage.PropTypes = {
	photos         : React.PropTypes.array,
	showPhotoDetail: React.PropTypes.func
};


export default PhotoListPage;
