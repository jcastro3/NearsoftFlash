import React from 'react';
import ReactDOM from 'react-dom';
import NSFlash from './NSFlash/NSFlash'
import './index.less';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'
const root = document.querySelector('#root');

const store = createStore(rootReducer);

ReactDOM.render(
    <main>
        <Provider store={store}>
            <NSFlash/>
        </Provider>
    </main>
    , root);