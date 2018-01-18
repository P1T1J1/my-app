import React, { PureComponent } from 'react';
import VideoDetail from '../VideoDetail';


class VideoList extends PureComponent {
  render () {

    return (
      <div>
        { this._renderVideoList() }
      </div>
    );
  }

  _renderVideoList = () => {
    const { videoData } = this.props;
    return videoData.map((video) => {
      return (
        <VideoDetail
          key={ video.id }
          id={ video.id }
          title={ video.title }
          thumbnail={ video.thumbnail }
          handleClick={ this._handleClick }
          handleFavorite= {this._handleFavorite} />
      );
    });
  }

  _handleClick = (id) => {
    this.props.handleClick(id);
  }

  _handleFavorite = (id) => {
    this.props.handleFavorite(id);
  }

}

export default VideoList;
