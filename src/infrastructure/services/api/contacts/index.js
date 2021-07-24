import axios from 'axios';


export default {
    getContacts: async () => {
        //alert("api/contacts getContacts")
       const response = await axios.get('./data/contacts.json');
       console.log("Contacts response: ", response.data );
        return response.data
    }
}
