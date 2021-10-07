import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


var mapStateToProps = function(reduxStoreData) {
  var props = {
    currentVideo: reduxStoreData.currentVideo
  };
  return props;
};

var mapDispatchToProps = function(dispatch) {
  updateVideo: (currentVideo) => {
    dispatch(changeVideo(currentVideo));
  };
};

var VideoPlayerContainer = () => {};



//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
