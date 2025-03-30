import axios from "axios"


export const fetchData = async (name = '') => {

    const url = `https://rickandmortyapi.com/api/character?name=${name}`
    const response = await axios.get(url)
    console.log('API', response);
    return response

}
