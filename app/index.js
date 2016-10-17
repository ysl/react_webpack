var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap').Button;
var _ = require('lodash');
var moment = require('moment');
var Apple = require('./modules/apple');
var Chart = require('./modules/chart');
var Utils = require('./js/utils');

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./css/style.css');


var App = React.createClass({
  getInitialState: function() {
    return {
      currTime: null
    };
  },
  componentDidMount: function() {
    var self = this;
    // Custom js.
    Utils.sayHello();
    setInterval(function() {
      self.setState({ currTime: moment().format() });
    }, 1000);
  },
  changeTitle: function() {
    // Try jQuery.
    $('#title').text('Hello Earth');

    // Try lodash.
    console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
  },
  render: function() {
    return (
      <div>
        <ul>
          <li><h3 id="title">Hello, World!</h3></li>
          <li>submodule: <Apple ref="apple" /></li>
          <li><a href="#" onClick={this.changeTitle}>Change World</a></li>
          <li>bootstrap: <a className="btn btn-default" href="#" role="button">Link</a></li>
          <li>react-bootstrap: <Button>Hello</Button></li>
          <li><div className="myDiv"></div></li>
          <li><img src={require('./img/food.jpg')} /></li>
          <li>Now: {this.state.currTime}</li>
          <li>font-awesome <i className="fa fa-camera-retro fa-2x"></i></li>
          <li><Chart /></li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
