import * as React from 'react'

type ImageProps = {
    src: string
}
const Poster: React.FC<ImageProps> = (props) => {
    const { src } = props
    return (
        <div className='poster-styles'>
            <img src={src} />
        </div>
    )
}

export default Poster;