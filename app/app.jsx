var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

var Home = require('./components/home');
var Chart = require('./components/chart');
require('./css/style.css');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/chart">Chart</Link></li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="chart" component={Chart}/>
    </Route>
  </Router>
), document.getElementById('app'));
