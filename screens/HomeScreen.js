import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchCryptocurrencies } from '../services/api';
import CryptocurrencyItem from '../components/CryptocurrencyItem';

const HomeScreen = ({ navigation }) => {
    const [cryptocurrencies, setCryptocurrencies] = useState([]);
    const [portfolio, setPortfolio] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCryptocurrencies();
            setCryptocurrencies(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleAddToPortfolio = useCallback((coin) => {
        setPortfolio((prevPortfolio) => ({
            ...prevPortfolio,
            [coin.id]: {
                ...coin,
                amount: (prevPortfolio[coin.id]?.amount || 0) + 1,
            },
        }));
    }, []);

    const calculateTotalValue = () => {
        return Object.values(portfolio).reduce((total, coin) => {
            return total + coin.current_price * coin.amount;
        }, 0).toFixed(2);
    };

    const renderItem = useCallback(({ item }) => (
        <CryptocurrencyItem coin={item} onAddToPortfolio={handleAddToPortfolio} navigation={navigation} />
    ), [handleAddToPortfolio, navigation]);

    const keyExtractor = useCallback((item) => item.id, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cryptocurrency Tracker</Text>
            <FlatList
                data={cryptocurrencies}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                windowSize={10}
            />
            <View style={styles.portfolio}>
                <Text style={styles.portfolioTitle}>Total Portfolio Value: ${calculateTotalValue()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    portfolio: {
        marginTop: 16,
    },
    portfolioTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;



// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { fetchCryptocurrencies } from '../services/api';
// import CryptocurrencyItem from '../components/CryptocurrencyItem';

// const HomeScreen = ({ navigation }) => {
//     const [cryptocurrencies, setCryptocurrencies] = useState([]);
//     const [portfolio, setPortfolio] = useState({});

//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await fetchCryptocurrencies();
//             setCryptocurrencies(data);
//         };
//         fetchData();
//     }, []);

//     const handleAddToPortfolio = useCallback((coin) => {
//         setPortfolio((prevPortfolio) => ({
//             ...prevPortfolio,
//             [coin.id]: {
//                 ...coin,
//                 amount: (prevPortfolio[coin.id]?.amount || 0) + 1,
//             },
//         }));
//     }, []);

//     const calculateTotalValue = () => {
//         return Object.values(portfolio).reduce((total, coin) => {
//             return total + coin.current_price * coin.amount;
//         }, 0).toFixed(2);
//     };

//     const renderItem = useCallback(({ item }) => (
//         <CryptocurrencyItem coin={item} onAddToPortfolio={handleAddToPortfolio} navigation={navigation} />
//     ), [handleAddToPortfolio, navigation]);

//     const keyExtractor = useCallback((item) => item.id, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Cryptocurrency Tracker</Text>
//             <FlatList
//                 data={cryptocurrencies}
//                 keyExtractor={keyExtractor}
//                 renderItem={renderItem}
//                 initialNumToRender={10}
//                 maxToRenderPerBatch={10}
//                 windowSize={10}
//             />
//             <View style={styles.portfolio}>
//                 <Text style={styles.portfolioTitle}>Total Portfolio Value: ${calculateTotalValue()}</Text>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     title: {
//         fontSize: 24,
//         marginBottom: 16,
//         textAlign: 'center',
//     },
//     portfolio: {
//         marginTop: 16,
//     },
//     portfolioTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default HomeScreen;
