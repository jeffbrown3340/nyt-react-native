import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => (
	<View style={styles.header}>
		<Text style={styles.title}>
			{props.children}
		</Text>
	</View>
);

const styles = {
	header: {
		height: 60,
		backgroundColor: 'rgba(76,217,175,1)',
		marginBottom: 5,
		marginTop: 25,
		shadowColor: '#000',
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 0
		}
	},
	title: {
		fontSize: 25,
		textAlign: 'center',
		marginTop: 12,
		fontWeight: 'bold',
		color: 'white'
	}
}

export default Header;