import React, { PureComponent } from 'react';

class SearchButton extends PureComponent {
  render () {
    return (
      <button
        onClick={ this._onClickButton }>
        {`Clicked => ${this.props.onClickedNum}`}
      </button>
    );
  }

  _onClickButton = () => {
    this.props.onChangeClickBtn();
  }
}

export default SearchButton;
