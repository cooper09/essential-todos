import axios from 'axios';


export default {
    getTasks: async () => {
       const response = await axios.get('./data/tasks.json');
       console.log("Tasks response: ", response.data );
        return response.data
    }
}
