import React, {PureComponent} from 'react';

class SearchBar extends PureComponent {
  state = {
    searchText: 'jh'
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.onInputText}
          onChange={ this._onChangeInput } />
      </div>
    );
  }

  // function _onChangeInput() {}
  _onChangeInput = (e) => {
    this.props.onChangeSearchBar(e);
  }
}

export default SearchBar;
export const apple = 'apple';
