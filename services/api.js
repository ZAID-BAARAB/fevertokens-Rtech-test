
import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';

export const fetchCryptocurrencies = async () => {
    try {
        const response = await axios.get(`${API_URL}?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
