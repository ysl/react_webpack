var React = require('react');
var ReactDOM = require('react-dom');
var Apple = require('./apple');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, World!</h1> 
        <Apple />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
