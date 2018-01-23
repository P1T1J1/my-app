import React, { PureComponent } from 'react';
import VideoDetail from '../VideoDetail';


class FavorVideoList extends PureComponent {
  render () {

    return (
      <div>
        { this._renderVideoList() }
      </div>
    );
  }

  _renderVideoList = () => {
    // TODO: 함수 완성
    // VideoList 참고하기.
  }

  _handleClick = (id) => {
    this.props.handleClick(id);
  }

  _handleFavorite = (id) => {
    this.props.handleFavorite(id);
  }

}

export default FavorVideoList;
