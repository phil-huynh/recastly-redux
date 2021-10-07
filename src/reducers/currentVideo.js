import Redux from 'redux';

var currentVideoReducer = (state = sampleData[0], action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return Object.assign({}, state, {currentVideo: action.payload});
  default:
    return state;
  }
};

export default currentVideoReducer;
