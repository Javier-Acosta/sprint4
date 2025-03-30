import axios from "axios"


export const fetchData = async() => {



    const url = `https://rickandmortyapi.com/api/character`
    const response = await axios.get(url)
    console.log('API', response);
    return response

}