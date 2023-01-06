import React from "react";
class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    };

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search,  this.state.type);
        }
    };

    handleChange = (event) => {
        this.setState(() => ({ type: event.target.dataset.type }), () => {

            this.props.searchMovies(this.state.search, this.state.type);
        });
    };

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        type="search"
                        className="validate"
                        placeholder="search"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="btn search-btn orange darken-3"
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            )
                        }
                    >
                        Search
                    </button>
                </div>
                <div className="filter">
                    <label>
                        <input
                            type="radio"
                            name="type"
                            data-type="all"
                            onChange={this.handleChange}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            data-type="movie"
                            onChange={this.handleChange}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            data-type="series"
                            onChange={this.handleChange}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            data-type="game"
                            onChange={this.handleChange}
                            checked={this.state.type === 'game'}
                        />
                        <span>Games</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
