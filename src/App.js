import { List } from 'immutable';
import React, { PureComponent } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootView from './components/RootView';
import rootReducer from './reducers';

const configureStore = (initialState) => {
    return createStore(rootReducer, initialState);
};

const store = configureStore();

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <RootView />
            </Provider>
        );
    }
}

export default App;
