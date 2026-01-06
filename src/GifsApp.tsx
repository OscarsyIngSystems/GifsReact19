import { GifsList } from "./gifs/GifsList"
import { PreviousSearches } from "./gifs/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import useGifs from "./gifs/hooks/useGifs"






export const GifsApp = () => {




    const { typeSearch, onChangeRadio, handleOnLabelClick, gifStickers, handleSearch, dataHistorial } = useGifs()


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
