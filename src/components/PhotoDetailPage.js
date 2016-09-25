import React from 'react';

const PhotoDetailPage = ({photo}) => {
  return (
    <div>
      <h1>{photo.title}</h1>
      <img src={photo.url}  role="presentation"/>
    </div>
  );
}

export default PhotoDetailPage;
