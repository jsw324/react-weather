const React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Use this app to get your local weather.  This is a learning project built on React</p>
      <p>Find the source code <a href="https://github.com/jsw324/react-weather">here</a></p>
      <p>Some of the tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - JavaScript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Open Weather Map API
        </li>
        <li>
          <a href="https://github.com/jsw324/react-weather">Github</a> - Github
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
