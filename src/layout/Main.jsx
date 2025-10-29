import React from "react";
import {Movies} from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=terminator`)
    .then(result => result.json())
    .then(data => this.setState({movies: data.Search}))
  }
startSearch = (query,type = 'all') => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=`+query+`${type !== 'all'? `&type=${type}` : ''}`)
    .then(result => result.json())
    .then(data => this.setState({movies: data.Search, loading: false}))
    }
  render() {
        const {movies, loading} = this.state;

        return <main className="container content">
            <Search  searchFn = {this.startSearch}/>
            {
                loading ? (
                   <Preloader/> 
                ) : 
                (
                    <Movies movies = {movies}/>
                )
            }
        
    </main>
  }

}
export {Main}