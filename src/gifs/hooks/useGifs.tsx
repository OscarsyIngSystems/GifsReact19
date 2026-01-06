import { useState } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifByQuery } from "../actions/get-gifs-by-query.action"

const useGifs = () => {


    const [dataHistorial, setDataHistorial] = useState<string[]>([])

    const [typeSearch, setTypeSearch] = useState('gifs')

    const [gifStickers, setGifStickers] = useState<Gif[]>([])


    const handleOnLabelClick = (item: string) => {
        console.log(item);

    }

    const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setTypeSearch(e.target.value)

    }

    const handleSearch = async (query: string) => {
        if (query) {
            let textClean = query.trim().toLowerCase()

            if (dataHistorial?.includes(textClean)) {
                return
            }

            if (dataHistorial && dataHistorial.length < 8) {
                setDataHistorial([textClean, ...dataHistorial])
            }

            const gifs = await getGifByQuery(query, typeSearch)


            setGifStickers(gifs)

        }










    }


    return {
        dataHistorial,
        setDataHistorial,
        typeSearch,
        setTypeSearch,
        gifStickers,
        setGifStickers,
        handleOnLabelClick,
        onChangeRadio,
        handleSearch

    }
}

export default useGifs