import React, { PureComponent } from 'react';
import './styles.css';

class VideoDetail extends PureComponent {
  render () {
    const { title, thumbnail, handleClick } = this.props;
    return (
      <div
        className="video-detail"
        onClick={ handleClick }>
        <div>
          { title }
        </div>
        <div>
          { thumbnail }
        </div>
      </div>
    );
  }
}

export default VideoDetail;
