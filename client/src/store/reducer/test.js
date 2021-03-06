import * as Type from '../type/type';

const initialState = {
  contents: []
}
export default function (state = initialState, action) {
  switch (action.type) {
    case Type.FETCH_DATA:
      return {
        ...state,
        contents: action.payload
      };
    default:
      return state;
  }
}