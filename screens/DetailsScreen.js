import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { fetchCryptocurrencies } from '../services/api';

const screenWidth = Dimensions.get('window').width;

const DetailsScreen = ({ route }) => {
    const { coinId } = route.params;
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCryptocurrencies();
            const selectedCoin = data.find((c) => c.id === coinId);
            setCoin(selectedCoin);
        };
        fetchData();
    }, [coinId]);

    if (!coin) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    const chartData = {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
        datasets: [
            {
                data: [coin.low_24h, coin.high_24h],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
            },
        ],
        legend: ['High and Low in Last 24 Hours'], // optional
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{coin.name}</Text>
            <Text style={styles.detail}>Current Price: ${coin.current_price}</Text>
            <Text style={styles.detail}>Market Cap: ${coin.market_cap}</Text>
            <Text style={styles.detail}>Total Volume: ${coin.total_volume}</Text>
            <Text style={styles.detail}>24h High: ${coin.high_24h}</Text>
            <Text style={styles.detail}>24h Low: ${coin.low_24h}</Text>

            <LineChart
                data={chartData}
                width={screenWidth - 32} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: '6',
                        strokeWidth: '2',
                        stroke: '#ffa726',
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    detail: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center',
    },
});

export default DetailsScreen;
