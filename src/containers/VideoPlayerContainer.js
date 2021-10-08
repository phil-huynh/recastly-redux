import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProps = (reduxStoreData) => ({
  video: reduxStoreData.currentVideo
});

var VideoPlayerContainer = connect(
  mapStateToProps, null
)(VideoPlayer);

export default VideoPlayerContainer;