import axios from 'axios';


export default {
    getViews: async () => {
       const response = await axios.get('./data/views.json');
       console.log("Views response: ", response.data );
        return response.data
    }
}
