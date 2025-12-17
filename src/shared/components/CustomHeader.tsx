
interface Props {
    title: string,
    descipsion?: string
}

export const CustomHeader = ({ title, descipsion }: Props) => {
    return (
        <div className="content-center">
            <h1>{title}</h1>
            {
                descipsion && (<p> {descipsion} </p>)
            }

        </div>
    )
}
