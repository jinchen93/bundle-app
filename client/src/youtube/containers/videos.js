import { connect }                  from 'react-redux';
import React, { Component }         from 'react';
import { bindActionCreators }       from 'redux';

import VideoThumbnail               from '../components/videoThumbnail';
import CurrentVideo                 from '../components/currentVideo';
import { fetchVideos, selectVideo } from '../actions'

class Videos extends Component {
  constructor(props) {
    super(props);
    props.fetchVideos(props.channel);
  }
  
  render() {
    const videos = this.props.videos;
    return(
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="row">
              <div className="col-md-1"></div>
              { 
                videos.all.map( (video) => 
                    <VideoThumbnail 
                      video={video} 
                      active={videos.current === video.position ? 'thumbnail-active' : ''}
                      onSelectVideo={ (position) => this.props.selectVideo(position) }
                      key={video.position}
                    />
                )
              }
            </div>
            { 
              videos.all.length > 0 ? 
                <CurrentVideo video={videos.all[videos.current]} /> 
              : 
                ''
            }
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos, selectVideo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Videos);