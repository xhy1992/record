import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, IndexRoute, hashHistory, Router, Link,browserHistory} from 'react-router';  
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import App from './container/App';
import Home from './routes/Home';
import TodoRoute from './routes/TodoRoute';
import DoingRoute from './routes/DoingRoute';
import DoneRoute from './routes/DoneRoute';
import configureStore from './stores';
import './main.less';
import Lest from './routes/Lest';

/* browserHistory 是使用 React Router 的应用推荐的 history  IndexRoute默认路由
 Hash history 不需要服务器任何配置就可以运行，如果你刚刚入门，那就使用它吧。
 但是我们不推荐在实际线上环境中用到它，因为每一个 web 应用都应该渴望使用 browserHistory*/
const store=configureStore();
ReactDOM.render(
	<Provider store={store}>
        <Router history={browserHistory} >
            <Route  path="/"  component={App}>
                <IndexRoute component={Home}/>
                <Route path="/todo" component={TodoRoute} />
                <Route path="/doing" component={DoingRoute} />
                <Route path="/done" component={DoneRoute}>
                    <Route path="/lest" component={Lest} />
                </Route>
            </Route>
        </Router>
    </Provider>
    ,document.getElementById('root')
);
