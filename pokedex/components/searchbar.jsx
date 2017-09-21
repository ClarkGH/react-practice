import React from 'react';

class SearchBar extends React.Component {
  constructor( props ) {
    super( props );

    this.state = { pokemonId: 1 }
  }

  render() {
    return (
      <div>
        <input
          type="number"
        />
      </div>
    );
  }
}

export default SearchBar;