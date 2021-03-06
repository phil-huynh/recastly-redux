import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = (reduxStoreData) => ({
  videos: reduxStoreData.videoList
});

var mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (video) => (
    dispatch(changeVideo(video))
  )
});

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default VideoListContainer;