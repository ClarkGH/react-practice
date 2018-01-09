const h1 = React.createElement('h1', null, 'Hello World');

class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'h1', 
      null, 
      'Hello ' + this.props.frameworkName + ' world!'
    );
  }
}

ReactDOM.render(
  React.createElement( 
    'div',
    null,
    React.createElement(
      HelloWorld,
      {
        id: 'ember',
        frameworkName: 'Ember.js',
        title: 'This is the last framework your should touch'
      }
    ),
    React.createElement(
      HelloWorld,
      {
        id: 'backbone',
        frameworkName: 'Backbone.js',
        title: 'Meh'
      }
    ),
    React.createElement(
      HelloWorld,
      {
        id: 'React',
        frameworkName: 'React.js',
        title: 'This isn\'t too bad'
      }
    )
  ),
  document.getElementById('container')
);