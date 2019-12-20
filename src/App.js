import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
// import { connect } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducers';
import { Provider } from 'react-redux';

const store = createStore(reducer);


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter/>
    </div>
    </Provider>
  );
}

export default App;
