import React from 'react';

const PhotoDetailPage = ({photo}) => {
  return (
    <div>
	{/*componentDidMount() {*/}
		{/*api.getPhotos().then( data => {*/}
		{/*this.setState({photos: data.slice(0,10)})*/}
	  {/*}).catch( error => {*/}
	    {/*console.log(error)*/}
	  {/*})*/}
	{/*}*/}
      <h1>{photo.title}</h1>
      <img src={photo.url}  role="presentation"/>
    </div>
  );
}

export default PhotoDetailPage;
