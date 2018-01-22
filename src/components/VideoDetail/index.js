import React, { PureComponent } from 'react';
import './styles.css';

class VideoDetail extends PureComponent {
  render () {
    const { title, thumbnail } = this.props;
    return (
      <div className="video-detail">
        <button
          onClick={ this._handleClick }>
          선택하기
        </button>
        <button
          onClick={ this._handleFavorite }>
          즐겨찾기
        </button>
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
    const { id, handleClick } = this.props;
    if (handleClick) {
      handleClick(id);
    }
  }

  _handleFavorite = () => {
    const { id, handleFavorite } = this.props;
    if (handleFavorite) {
      handleFavorite(id);
    }
  }
}

export default VideoDetail;
