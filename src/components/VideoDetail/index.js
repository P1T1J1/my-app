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

  // 즐겨찾기 버튼을 누르면 App.js로 현재 비디오의 id가
  // 전달되어야한다.
  _handleFavorite = () => {

  }
}

export default VideoDetail;
