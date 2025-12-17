
interface Props {
    title: string,
    data?: string[]
}


const dataDefaul = ['default', 'saitama', 'vegeta']


export const PreviousSearches = ({ title, data = dataDefaul }: Props) => {
    return (
        <div className="previous-searches">
            <h2>{title}</h2>

            {
                data && (
                    <ul className="previous-searches-list">
                        {data.map((item) => (
                            <li key={item} > {item} </li>
                        ))}

                    </ul>
                )
            }

        </div>
    )
}
