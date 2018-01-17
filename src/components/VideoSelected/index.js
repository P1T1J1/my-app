import React, { PureComponent } from 'react';
import VideoDetail from '../VideoDetail';
class VideoSelected extends PureComponent {
  render () {
    const { video } = this.props;
    
    // 알맞은 VideoDetail props를 넘겨준다.
    return (
      <div>
        <VideoDetail />
      </div>
    );
  }
}

export default VideoSelected;
