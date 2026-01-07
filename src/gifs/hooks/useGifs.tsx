import { useRef, useState } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifByQuery } from "../actions/get-gifs-by-query.action"



// const gifsCache: Record<string, Gif[]> = {}

const useGifs = () => {


    const [dataHistorial, setDataHistorial] = useState<string[]>([])

    const [typeSearch, setTypeSearch] = useState('gifs')

    const [gifStickers, setGifStickers] = useState<Gif[]>([])

    const gifsCache = useRef<Record<string, Gif[]>>({})


    const handleOnLabelClick = async (item: string) => {

        if (gifsCache.current[item]) {

            setGifStickers(gifsCache.current[item])
            return;
        }


        const gifs = await getGifByQuery(item, typeSearch)


        setGifStickers(gifs)

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
            gifsCache.current[query] = gifs

        }


    }


    return {
        dataHistorial,
        gifStickers,
        typeSearch,
        setDataHistorial,
        setTypeSearch,
        setGifStickers,
        handleOnLabelClick,
        handleSearch,
        onChangeRadio

    }
}

export default useGifs