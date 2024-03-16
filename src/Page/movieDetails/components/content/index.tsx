import * as React from 'react'

type DetailProps = {
    detail: any
}
const ContentDetail: React.FC<DetailProps> = (props) => {
    const { detail } = props
    return (
        <div className='detail-content'>
            <h2>{detail.original_title}</h2>
            <h3>Overview</h3>
            <p>{detail.overview}</p>
        </div>
    )
}

export default ContentDetail;