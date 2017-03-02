const React = require('react');
const {Link} = require('react-router');
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ul>
        <li>
          <Link to="/?location=Boca%20Raton">Boca Raton, Fl</Link>
        </li>
        <li>
          <Link to="/?location=newyork">New York, NY</Link>
        </li>
      </ul>
    </div>
  )
};

module.exports = Examples;
