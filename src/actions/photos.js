const getPhotos = (data) => {
	return {
		type:'RECEIVE_PHOTOS',
		data: data
	};
};

export default getPhotos;