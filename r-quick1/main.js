const h1 = React.createElement('h1', null, 'Hello World');

ReactDOM.render(
  React.createElement('div', null, h1, h1), //extra elements
  document.getElementById('container')
);