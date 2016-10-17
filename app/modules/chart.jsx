var React = require('react');
var C3 = require('c3');
require('c3/c3.css');

var Chart = React.createClass({
  componentDidMount: function() {
    var chart = C3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    });
  },
  render: function() {
    return (
      <div>
        <h3>C3 chart</h3>
        <div id="chart"></div>
      </div>
    );
  }
});

module.exports = Chart;
