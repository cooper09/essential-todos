import axios from 'axios';

export default {
    getUsers: async () => {
        console.log ("api/users getUsers")
       const response = await axios.get('./users.json');
       alert("Users response: "+ response.data )
        return response.data
    }
}