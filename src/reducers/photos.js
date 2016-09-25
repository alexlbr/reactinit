const photos = (state = [{
	"albumId"     : 1,
	"id"          : 1,
	"title"       : "accusamus beatae ad facilis cum similique qui sunt",
	"url"         : "http://placehold.it/600/92c952",
	"thumbnailUrl": "http://placehold.it/150/30ac17"
}], action) => {
	switch (action.type) {
		case 'RECEIVE_PHOTOS':
			return action.data.slice(0,5);
		default:
			return state;
	}
};

export default photos;