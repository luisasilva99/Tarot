import axios from 'axios';

const TAROT_API_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';

export const getAllCards = async () => {
    try {
        const response = await axios.get(TAROT_API_URL);
        return response.data;
    } catch (error) {
        console.error("Error al obtener cartas", error);
        return[];
    }
};



