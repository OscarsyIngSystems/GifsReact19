import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    btnText: string,
    placeholder?: string
    onSearch: (query: string) => void;
}

export const SearchBar = ({ btnText, placeholder = 'Buscar...', onSearch }: Props) => {

    const [query, setQuery] = useState('')

    useEffect(() => {

        const timeOutId = setTimeout(() => {
            onSearch(query)
        }, 700);

        return () => {
            clearTimeout(timeOutId)
        }


    }, [query, onSearch])

    const handleOnSearch = () => {
        onSearch(query)

    }

    const handleKeyDown = (eve: KeyboardEvent<HTMLInputElement>) => {
        if (eve.key == 'Enter') {
            handleOnSearch()
        }
    }


    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={handleOnSearch}

            >{btnText}</button>
        </div>
    )
}
