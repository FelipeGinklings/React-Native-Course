import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GoalItem = () => {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}>{itemData.item.text}</Text>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	goalText: {
		color: 'white',
	},
});
