import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifByQuery } from "./get-gifs-by-query.action";

import AxiosMockAdapter from "axios-mock-adapter";
import axios from "axios";




// const giphyApi = axios.create({
//     baseURL: 'https://api.giphy.com/v1/',
//     params: {

//         limit: 20,
//         lang: 'es',
//         api_key: import.meta.env.VITE_GIPHY_API_KEY
//     }
// })

const mockGiphyResponseData = {
    data: Array.from({ length: 20 }, (_, i) => ({
        id: `id${i}`,
        title: `Gif Title ${i}`,
        images: {
            // Your action uses 'original'
            original: {
                url: `http://example.com/gif${i}.gif`,
                width: "400",
                height: "300"
            }
        }
    }))
};


describe('getGifByQuery', () => {




    const mockAxios = new AxiosMockAdapter(axios)
    const type = 'gifs'


    //Se debe resetear los mock para cada vez que se corre un test debe sey nueva la instancia 
    beforeEach(() => {
        mockAxios.reset();// si ni funciona mejor sobre escribe
    })

    // test('debe retornar una lista de gifs', async () => {

    //     const gifs = await getGifByQuery('gifs')

    //     const [gif1] = gifs

    //     console.log(gif1);

    //     expect(gifs.length).toStrictEqual(20)

    //     expect(gif1).toEqual({
    //         id: expect.any(String),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width: expect.any(Number),
    //         height: expect.any(Number)

    //     })

    // })

    test('debe retornar una lista de gifs', async () => {
        mockAxios.onGet(`https://api.giphy.com/v1/${type}/search`).reply(200, mockGiphyResponseData)
        const gifs = await getGifByQuery('goku')

        expect(gifs.length).toBe(20)

        gifs.forEach(gif => {
            expect(typeof gif.id).toBe('string')
            expect(typeof gif.title).toBe('string')
            expect(typeof gif.url).toBe('string')
            expect(typeof gif.height).toBe('number')
            expect(typeof gif.width).toBe('number')

        })



    })




    test('debe retornar una lista de gifs vacia', async () => {

        mockAxios.onGet(`https://api.giphy.com/v1/${type}/search`).reply(200, { data: [] })

        const gifs = await getGifByQuery('')

        expect(gifs.length).toBe(0)





    })

    test('debe mostrar error cuando la api degresa error', async () => {

        // espiar una funcion cuando sea llamada

        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {
            lord: 'aqui se pone lo que quieres que se mande en lugar del console.error verdadero, '
        })

        //hacer un mock del axios con el replay dice que quiero que arroje de status, el siguiente es el objeto de la respuesta simulada
        mockAxios.onGet(`https://api.giphy.com/v1/${type}/search`).reply(400, {
            data: {
                message: 'LOR pruebas test '
            }
        })

        const gifs = await getGifByQuery('goku')

        expect(gifs.length).toBe(0)
        expect(consoleErrorSpy).toHaveBeenCalled()
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
        //prueba que sea mandado un parametro en el console errro, cualquier cosa pero que si se mande el error
        expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything())


    })
})


