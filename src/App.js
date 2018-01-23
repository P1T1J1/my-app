import { List } from 'immutable';
import React, { PureComponent } from 'react';
import VideoData from './jsons/data';

import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchButton';
import VideoList from './components/VideoList';
import VideoSelected from './components/VideoSelected';
import FavorVideoList from './components/FavorVideoList';
import './App.css';


class App extends PureComponent {
  state = {
    searchText: '',
    selectedVid: -1,
    favorVidList: List()
  };

  render() {
    const { searchText, selectedVid, favorVidList } = this.state;

    // 즐겨찾기한 video
    const _favorVideo = this._filterVideo(List(VideoData), favorVidList);

    return (
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <div className="header__wrapper">
              <h1>Video Search App</h1>
              <h2>검색창</h2>
              <SearchBar
                onChangeSearchBar={ this._onChangeSearchBar }
                onInputText={ searchText } />
              <SearchButton
                onChangeClickBtn={ this._onChangeClickBtn }
                onClickedNum={ 0 } />
            </div>
          </div>

          <div className="body">
            <div className="body__wrapper">
              <h2>선택된 비디오</h2>
              {
                this._maybeRenderVideoSelected(selectedVid)
              }
            </div>
            <div className="body__wrapper">
              <h2>비디오 리스트</h2>
              <VideoList
                videoData={ VideoData }
                handleClick={ this._handleVideoListClick }
                handleFavorite={ this._handleVideoListFavorite } />
            </div>
            <div className="body__wrapper">
              <h2>즐겨찾기</h2>
              {/*
                TODO:
                FavorVideoList완성하기.
              */}
              <FavorVideoList
                videoData={ null }
                handleClick={ () => {} }
                handleFavorite={ () => {} } />
            </div>
          </div>
        </div>
      </div>
    );
  }

  _maybeRenderVideoSelected = (id) => {
    if (id !== -1) {
      const video = VideoData[id];
      return (
        <VideoSelected video={ video } />
      );
    } else {
      return (
        <div>
          선택된 비디오가 없습니다.
        </div>
      );
    }
  }

  _onChangeClickBtn = () => {
  }

  _onChangeSearchBar = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }

  _handleVideoListClick = (id) => {
    this.setState({
      selectedVid: id
    });
  }

  _handleVideoListFavorite = (id) => {
    const { favorVidList } = this.state;

    const idx = favorVidList.indexOf(id);
    if (idx !== -1) {
      this.setState({
        favorVidList: favorVidList.delete(idx)
      });
    } else {
      this.setState({
        favorVidList: favorVidList.push(id)
      });
    }
  }

  /*
    vids에 해당하는 videos를 필터링해서 리턴해준다.
    @vids: List<number>
    @videos: List<video>
  */
  _filterVideo = (videos, vids) => {
    /*
      List.filter((value, index) => boolean)

      true를 리턴하면 List에 그대로 남아있고
      false를 리턴하면 필터링되어서 없어진다.
    */
    const filteredVideos = videos.filter((video, idx) => {
      // TODO: video의 id가 vids에 있으면 true를 리턴한다.
      return false;
    });

    return filteredVideos;
  }
}

export default App;
