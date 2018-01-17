import React, { PureComponent } from 'react';
import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchButton';
import VideoList from './components/VideoList';
import VideoSelected from './components/VideoSelected';
import './App.css';

const VideoData = [
  {
    id: 1,
    title: '1번 비디오',
    thumbnail: 'example1.com'
  },
  {
    id: 2,
    title: '2번 비디오',
    thumbnail: 'example1.com'
  },
  {
    id: 3,
    title: '3번 비디오',
    thumbnail: 'example1.com'
  },
  {
    id: 4,
    title: '4번 비디오',
    thumbnail: 'example1.com'
  }
];
class App extends PureComponent {
  state = {
    searchText: '',
    clicked: 0
  };

  render() {
    const { searchText, clicked } = this.state;
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
            <VideoSelected />
            <VideoList />
          </div>
        </div>
      </div>
    );
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
  };
}

export default App;
