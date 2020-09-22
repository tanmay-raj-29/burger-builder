import axios from 'axios';

const instance =axios.create ({
    baseURL: "https://burger-builder-2b2bc.firebaseio.com/"
});

export default instance;