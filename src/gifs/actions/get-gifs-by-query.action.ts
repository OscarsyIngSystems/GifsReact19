import axios from 'axios';
import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif.interface';

export const getGifByQuery = async (query: string, type: string): Promise<Gif[]> => {


    const url = `https://api.giphy.com/v1/${type}/search`


    const response = await axios.get<GiphyResponse>(url, {
        params: {
            q: query,
            limit: 200,
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY
        }
    })




    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }))

}