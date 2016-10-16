var React = require('react');
var ReactDOM = require('react-dom');
var Apple = require('./apple');
require("./style.css");
var _ = require('lodash');


var App = React.createClass({
  hideApple: function() {
    console.log($)
    console.log($('h1'));
    $('h1').text('Hello World 2');
    console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
  },
  render: function() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <a href="#" onClick={this.hideApple}>Hide</a>
        <Apple ref="apple" />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
