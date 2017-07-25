import React, { Component} from 'react';
import { View, Text} from 'react-native';
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

class SearchContainer extends Component {
	state = {
		searchTerm: ''
	};

	render() {
		return(
		<View>
			<SearchBox 
			    placeholder='Search'
			    onSearch={(searchTerm) => this.setState({searchTerm})} />
			<SearchResults 
				searchTerm={this.state.searchTerm}
			/>
		</View>
		);
	}
}

export default SearchContainer;