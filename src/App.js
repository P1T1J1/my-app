import React, { PureComponent } from 'react';
import SearchBar, { apple } from './components/SearchBar';
import SearchButton from './components/SearchButton';

class App extends PureComponent {
  state = {
    searchText: '',
    clicked: 0
  };

  render() {
    const { searchText, clicked } = this.state;
    return (
      <div>
        <SearchBar
          onChangeSearchBar={ this._onChangeSearchBar }
          onInputText={ searchText } />
        <SearchButton
          onChangeClickBtn={ this._onChangeClickBtn }
          onClickedNum={ clicked } />
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
