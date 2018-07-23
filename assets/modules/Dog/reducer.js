import { fromJS } from 'immutable';

import {
    DOG_SET_IMAGE
} from './actions';

/** Dog Store **/
const dogInitialState = fromJS({
    image: null
})

export const dogReducer = function (state = dogInitialState, action) {
    switch (action.type) {
        case DOG_SET_IMAGE:
            return state.set('image', fromJS(action.image));
    }

    return state;
}
