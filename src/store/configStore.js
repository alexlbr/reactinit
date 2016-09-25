import { createStore } from 'redux'
import photos from '../reducers/photos';

const Store = createStore(photos);

export default Store;