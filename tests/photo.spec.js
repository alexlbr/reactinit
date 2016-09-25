import React from 'react';
import {mount, shallow} from 'enzyme';
import PhotoListContainer from '../src/containers/PhotoListContainer';
// import * as api from "../app/api/index";
import sinon from 'sinon';

describe('Photo list container test', () => {
	it('should fetch the photos', () => {
		const wrapper = mount(
			<PhotoListContainer />, {context: {router: sinon.spy()}}
		);
		sinon
			.stub(api, 'getPhotos')
			.returns(new Promise(()=>({})));
		sinon.assert.calledWith(api.getPhotos, '123');
	})
});
