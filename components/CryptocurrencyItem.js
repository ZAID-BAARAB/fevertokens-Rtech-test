import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
const CryptocurrencyItem = ({ coin, onAddToPortfolio, navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details', { coinId: coin.id })}>
            <Image source={{ uri: coin.image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{coin.name}</Text>
                <Text style={styles.price}>${coin.current_price}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => onAddToPortfolio(coin)}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </TouchableOpacity>
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
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: '#888',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default memo(CryptocurrencyItem);
