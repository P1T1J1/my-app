import React, { PureComponent } from 'react';
import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchButton';
import VideoList from './components/VideoList';
import VideoSelected from './components/VideoSelected';
import './App.css';

const VideoData = [
  {
    id: 0,
    title: '1번 비디오',
    thumbnail: 'example1.com'
  },
  {
    id: 1,
    title: '2번 비디오',
    thumbnail: 'example1.com'
  },
  {
    id: 2,
    title: '3번 비디오',
    thumbnail: 'example1.com'
  },
  {
    id: 3,
    title: '4번 비디오',
    thumbnail: 'example1.com'
  }
];
class App extends PureComponent {
  state = {
    searchText: '',
    clicked: 0,
    selectedVId: -1
  };

  render() {
    const { searchText, clicked, selectedVId } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <SearchBar
              onChangeSearchBar={ this._onChangeSearchBar }
              onInputText={ searchText } />
            <SearchButton
              onChangeClickBtn={ this._onChangeClickBtn }
              onClickedNum={ clicked } />
          </div>

          <div className="body">
            {
              this._maybeRenderVideoSelected(selectedVId)
            }
            <VideoList
              videoData={ VideoData }
              handleClick={ this._handleVideoListClick }
              handleFavorite={ this._handleVideoListFavorite } />
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
    this.setState({
      clicked: this.state.clicked + 1
    });
  }

  _onChangeSearchBar = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }

  _handleVideoListClick = (id) => {
    this.setState({
      selectedVId: id
    });
  }

  // 비디오 즐겨찾기 버튼을 누르면 그 비디오의 id가
  // 콘솔창에 찍혀야한다.
  _handleVideoListFavorite = (id) => {
    console.log('id', id);
  }
}

export default App;
