import { List } from 'immutable';
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
    selectedVId: -1,
    favorVIdList: List()
  };

  render() {
    const { searchText, clicked, selectedVId, favorVIdList } = this.state;

    // 결과 확인
    console.log(favorVIdList.toJS());

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
                onClickedNum={ clicked } />
            </div>
          </div>

          <div className="body">
            <div className="body__wrapper">
              <h2>선택된 비디오</h2>
              {
                this._maybeRenderVideoSelected(selectedVId)
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

  _handleVideoListFavorite = (id) => {
    const { favorVIdList } = this.state;

    // 목표: id가 favorVIdList에 있으면 삭제하고 없으면 추가한다.
    // immutable-js의 List를 활용
    // 참조: https://facebook.github.io/immutable-js/docs/#/List
    // 방법:
    // indexOf를 활용해서 리스트의 인덱스를 가져온다.
    // 인덱스를 활용해서 존재유무를 확인하고
    // 리스트에 추가하거나 삭제한다.
  }
}

export default App;
