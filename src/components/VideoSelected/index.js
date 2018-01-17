import React, { PureComponent } from 'react';
import VideoDetail from '../VideoDetail';
class VideoSelected extends PureComponent {
  render () {
    const { video } = this.props;
    return (
      <div>
        <VideoDetail
          id={ video.id }
          title={ video.title }
          thumbnail={ video.thumbnail } />
      </div>
    );
  }
}

export default VideoSelected;
