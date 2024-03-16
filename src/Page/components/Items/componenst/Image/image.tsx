import * as React from 'react'

type ImageProps = {
    src: string
}
const ImageItems: React.FC<ImageProps> = (props) => {
    const { src } = props
    return (
        <div className='img-styles'>
            <img src={src} />
        </div>
    )
}

export default ImageItems;