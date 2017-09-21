import React from 'react';

class SearchBar extends React.Component {
  constructor( props ) {
    super( props );

    this.state = { pokedexNum: 1 }
  }

  render() {
    return (
      <div>
        <input
          type="number"
          value={ this.state.pokedexNum }
          onChange={ event => this.onInputChange( event.target.value ) }
        />
      </div>
    );
  }

  onInputChange( pokedexNum ) {
    var pokedexNum = parseInt( pokedexNum );
    this.setState( {pokedexNum} );
    this.props.onSearchTermChange( pokedexNum );
  }
}

export default SearchBar;