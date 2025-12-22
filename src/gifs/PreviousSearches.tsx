
interface Props {
    title: string,
    data?: string[]
    onLableClick: (item: string) => void;
}





export const PreviousSearches = ({ title, data, onLableClick }: Props) => {
    return (
        <div className="previous-searches">
            <h2>{title}</h2>

            {
                data && (
                    <ul className="previous-searches-list">
                        {data.map((item) => (
                            <li onClick={() => onLableClick(item)} key={item} > {item} </li>
                        ))}

                    </ul>
                )
            }

        </div>
    )
}
