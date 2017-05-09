import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import CounterContainer from './counter/Counter';
import counterReducer from './counter/Counter.reducer';
import GalleryContainer from './gallery/Gallery';
import galleryReducer from './gallery/Gallery.reducer';
import DragonGameContainer from './dragon/Dragon';
import dragonGameReducer from './dragon/Dragon.reducer';
import WeatherContainer from './weather/Weather';
import weatherReducer from './weather/Weather.reducer';
import {Router, Route, hashHistory, Link, IndexRoute, IndexLink} from 'react-router';

const reducer = Redux.combineReducers({
  theCount: counterReducer,
  galleryInfo: galleryReducer,
  dragonGame: dragonGameReducer,
  weather: weatherReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

const HomePage = () =>
<div>
    <h2>Karibu!</h2>
</div>


const AppLayout = ({children}) =>
<div>
    <ul className = "nav">
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/dragon">Dragon</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/weather">Weather</Link></li>
    </ul>
    <div>
        {children}
    </div>
</div>;



ReactDOM.render(
  <ReactRedux.Provider store={store}>

    <Router history = {hashHistory}>
    <Route path="/" component={AppLayout}>
    <IndexRoute component={HomePage}/>
    <Route path="/counter" component={CounterContainer}/>
    <Route path="/dragon" component={DragonGameContainer}/>
    <Route path="/gallery" component={GalleryContainer}/>
    <Route path="/weather/:name" component={WeatherContainer}/>
    </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
