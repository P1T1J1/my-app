import React, { PureComponent } from 'react';
import './styles.css';

class VideoDetail extends PureComponent {
  render () {
    const { title, thumbnail } = this.props;
    return (
      <div
        className="video-detail"
        onClick={ this._handleClick }>
        <div>
          { title }
        </div>
        <div>
          { thumbnail }
        </div>
      </div>
    );
  }

  _handleClick = () => {
    const { id } = this.props;
    this.props.handleClick(id)
  }
}

export default VideoDetail;
