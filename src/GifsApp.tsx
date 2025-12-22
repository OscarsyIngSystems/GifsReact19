import { useEffect, useState } from "react"
import { GifsList } from "./gifs/GifsList"
import { PreviousSearches } from "./gifs/PreviousSearches"
import { mockGifs } from "./mocks-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"






export const GifsApp = () => {


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


    return (
        <>

            {/* Header */}
            <CustomHeader title={`${typeSearch.toLocaleUpperCase()} LORD`} descipsion={`Busca y descubre ${typeSearch.toLocaleUpperCase()} geniales !`} />

            <div className="conteiner-type-search">
                <div className="conteiner-gif" >
                    <input id="gif" type="radio" name="typeSearch" value='gifs' onChange={(e) => onChangeRadio(e)}
                        defaultChecked />
                    <label htmlFor="gif">Gifs</label>

                </div>
                <div>

                    <input id="stiker" type="radio" name="typeSearch" value='stickers' onChange={(e) => onChangeRadio(e)} />
                    <label htmlFor="stiker">Stickers</label>
                </div>
            </div>

            {/* search */}

            <SearchBar btnText="Buscar" placeholder={`Buscar ${typeSearch.toLocaleUpperCase()} Lord...`} onSearch={handleSearch} />

            {/* busquedas previas */}
            <PreviousSearches onLableClick={handleOnLabelClick} title="Historial de Busquedas" data={dataHistorial} />

            {/* Gifs */}

            {
                gifStickers?.length > 0 && (<GifsList gifs={gifStickers} />)
            }
        </>
    )
}
