import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const PortfolioItem = ({ coin, amount, onAmountChange }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{coin.name}</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={String(amount)}
                onChangeText={(text) => onAmountChange(coin.id, parseFloat(text))}
            />
            <Text style={styles.value}>${(coin.current_price * amount).toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    name: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        width: 70,
        padding: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginRight: 10,
    },
    value: {
        fontSize: 16,
    },
});

export default PortfolioItem;
