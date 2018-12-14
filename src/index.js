import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import './index.css';
import {mapStateToProps,mapDispatchToProps} from './Actions';
import {reducer} from './Reducer'
const store = createStore(reducer);

const ProductAppWithStore = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(<Provider store = {store}>
<ProductAppWithStore />
</Provider>,document.getElementById('root')
);
serviceWorker.unregister();
