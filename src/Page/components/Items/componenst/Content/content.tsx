import * as React from 'react'

type ImageProps = {
    title: string,
    release_date: string,
    media: string
}
const ContentItems: React.FC<ImageProps> = (props) => {
    const { title, release_date, media } = props
    return (
        <div className='content-items'>
            <h2>{title}</h2>
            <p>{release_date}</p>
            <p>{media}</p>

        </div>
    )
}

export default ContentItems;