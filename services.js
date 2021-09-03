import axios from 'axios';

export const getPokemons = async() => {
    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");

        return data.results;

    } catch (error) {
        console.error(error);
    }
}