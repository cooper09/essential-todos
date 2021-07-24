import axios from 'axios';


export default {
    getGroups: async () => {
       const response = await axios.get('./data/groups.json');
       console.log("Groups response: ", response.data );
        return response.data
    }
}
