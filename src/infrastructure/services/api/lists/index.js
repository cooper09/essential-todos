import axios from 'axios';


export default {
    getLists: async () => {
       const response = await axios.get('./data/lists.json');
       console.log("Lists response: ", response.data );
        return response.data
    }
}
