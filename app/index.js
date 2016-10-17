var React = require('react');
var ReactDOM = require('react-dom');
var Apple = require('./modules/apple');
var Utils = require('./js/utils');

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./css/style.css');
var _ = require('lodash');


var App = React.createClass({
  componentDidMount: function() {
    // Custom js.
    Utils.sayHello();
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
          <li><Apple ref="apple" /></li>
          <li><a href="#" onClick={this.changeTitle}>Change World</a></li>
          <li><a className="btn btn-default" href="#" role="button">Link</a></li>
          <li><div className="myDiv"></div></li>
          <li><img src={require('./img/food.jpg')} /></li>
          <li>font-awesome <i className="fa fa-camera-retro fa-2x"></i></li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
