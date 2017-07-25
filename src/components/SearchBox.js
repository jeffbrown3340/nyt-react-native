import React from 'react';
import { TextInput } from 'react-native';


const SearchBox = (props) =>  (
	<TextInput
		autoFocus
		placeholderTextColor = "white"
		placeholder={props.placeholder}
		onSubmitEditing={(event) => props.onSearch(event.nativeEvent.text)}
	 />

	);

export default SearchBox;