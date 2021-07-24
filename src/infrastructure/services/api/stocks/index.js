import axios from 'axios';


export default {
    getStocks: async () => {
       const response = await axios.get('./data/stocks.json');
       console.log("Stocks response: ", response.data );
        return response.data
    }
}
