import React, {PureComponent} from 'react';
import './styles.css';

class SearchBar extends PureComponent {
  render() {
    return (
      <div className="searchbar">
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
