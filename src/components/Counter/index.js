import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseCounter } from "../../actions/counter";

class Counter extends PureComponent {
    render() {
        return (
            <div>
                <h1>
                    { this.props._counter }
                </h1>
                <button
                    onClick={ this.props.increase }
                >
                    증가
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    _counter: state.counter.count
});

const mapDispatchToProps = dispatch => bindActionCreators({
    increase: increaseCounter
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
