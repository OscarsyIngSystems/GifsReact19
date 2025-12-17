
interface Props {
    btnText: string,
    placeholder?: string
}

export const SearchBar = ({ btnText, placeholder = 'Buscar...' }: Props) => {
    return (
        <div className="search-container">
            <input type="text" placeholder={placeholder} />
            <button>{btnText}</button>
        </div>
    )
}
