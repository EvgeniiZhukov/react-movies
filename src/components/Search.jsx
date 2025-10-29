import React from 'react';

class Search extends React.Component {

    state={
        search: '',
        type: 'all',
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.searchFn(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(
            () => ({type: event.target.dataset.type}),
            () => {this.props.searchFn(this.state.search, this.state.type)}
        );
    }

    // handleCheckBox = (event) => {
    //     console.log(event.target.name, event.target.value);
    //     // this.setState(this.state.chosen : !this.state.chosen)
    //     this.setState({ [event.target.name]: event.target.value });
        
    // };

    render() {
        const {searchFn} = this.props;
        return (
            
      <div className="row">
          <div className="input-field">
                <input 
                    placeholder='search' 
                    type="search" 
                    className="validate"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKeyPress}
                />
                <button className="btn waves-effect waves-light search-btn"
                    onClick = {(e) => searchFn(this.state.search, this.state.type)}
                >Search</button>
          </div>
           <div>
                <label>
                    <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type = 'all'
                        onChange={this.handleFilter}
                        checked = {this.state.type === 'all'}
                    />
                    <span>All</span>
                </label>
            
            
                <label>
                    <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type = 'movie'
                        onChange={this.handleFilter}
                        checked = {this.state.type === 'movie'}
                    />
                    <span>Movie</span>
                </label>
           
                <label>
                    <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type = 'series'
                        onChange={this.handleFilter}
                        checked = {this.state.type === 'series'}
                    />
                    <span>Series</span>
                </label>
           </div>
      </div>
        );
    }
}

export {Search};