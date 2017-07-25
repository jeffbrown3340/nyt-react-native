import React, { Component} from 'react';
import { View, Text, ScrollView } from 'react-native';
import Article from "./Article.js";

class SearchResults extends Component {

	state = {
		articles: []
	}


	componentWillReceiveProps(nextProps) {
		this.fetchData(nextProps.searchTerm);
	}

	fetchData(searchTerm) {
        // We pass the movie the user entered in into the URL for the API call.
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(searchTerm)}&api-key=43babb7153f14e05afd9be8e7e21e502`)
            .then(response => response.json())
            .then((data) => {
                // After the data is recieved, we set this.state.movie to the result of the API
                // call.
                console.log(data);
                this.setState({
                    articles: data.response.docs
                });
            })
            .catch(err => console.log(err));
	}

	render ( ) {
		return(
		<ScrollView>
			{this.state.articles.map(article => (
				<Article key={article._id} article={article} />
			))}
		</ScrollView>
	)}
}

export default SearchResults;