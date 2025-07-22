interface SmallState {
  stateChanged: number;
}

interface SerachProps {
  filter: () => Promise<void>;
  storeQuery: (ev: React.ChangeEvent<Element>) => void;
}

import { Component } from 'react';
import '../main-component.css';

export default class SearchSection extends Component<SerachProps, SmallState> {
  state: SmallState = {
    stateChanged: 0,
  };

  componentDidUpdate(): void {
    const localQuery: string = localStorage.PokemonQueryMariyaShusharina;

    if (localQuery.trim() == '') {
      throw Error('Search query is empty!');
    }
  }

  render() {
    return (
      <>
        <input
          type="search"
          className="search-field"
          placeholder="Your input..."
          onChange={(ev) => {
            this.props.storeQuery(ev);
          }}
        ></input>
        <button
          onClick={() => {
            this.props.filter();
            this.setState({ stateChanged: this.state.stateChanged + 1 });
          }}
        >
          Search
        </button>
      </>
    );
  }
}
