
export interface Gif {
    id: string;
    title: string;
    url: string;
    width: number;
    height: number;
}

interface Props {
    gifs: Gif[]
}



export const GifsList = ({ gifs }: Props) => {
    return (
        <div className="gifs-container">

            {
                gifs.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width} X {gif.height} (1.5mb)
                        </p>
                    </div>
                ))
            }

        </div>
    )
}
