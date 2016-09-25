export const getPhotos = () => (
  fetch('http://jsonplaceholder.typicode.com/photos', {
    method: 'get'
  }).then((response) => {
    return response.json()
  })
)

export const getPhoto = (id) => (
  fetch(`http://jsonplaceholder.typicode.com/photos/${id}`, {
    method: 'get'
  }).then((response) => {
    return response.json()
  })
)
