var React = require('react'),
    ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate 3 project</p>,
  document.getElementById('app')
);
