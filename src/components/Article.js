import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Article = (props) => (
	<View>
		<Text>{props.article.headline.main}</Text>
		<Text>{props.article.snippet}</Text>
	</View>
);

export default Article;