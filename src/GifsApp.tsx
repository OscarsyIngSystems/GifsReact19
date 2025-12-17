import { useState } from "react"
import { GifsList } from "./gifs/GifsList"
import { PreviousSearches } from "./gifs/PreviousSearches"
import { mockGifs } from "./mocks-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"




// const dataHistorial = ['mario', 'gatitos', 'buho']

export const GifsApp = () => {


    const [dataHistorial, setDataHistorial] = useState()


    return (
        <>

            {/* Header */}
            <CustomHeader title="Gifs LORD" descipsion="Busca y descubre gifs geniales !" />
            {/* search */}

            <SearchBar btnText="Buscar" placeholder="Buscar Gifs Lord..." />

            {/* busquedas previas */}
            <PreviousSearches title="Historial de Busquedas" data={dataHistorial} />

            {/* Gifs */}

            <GifsList gifs={mockGifs} />
        </>
    )
}
