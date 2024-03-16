import * as React from 'react'
import { Genre } from '../../interface'
import Tag from '../../../components/Tag'
import common from '../../../../utils/common'

type DetailProps = {
    detail: any
}
const ContentDetail: React.FC<DetailProps> = (props) => {
    const { detail } = props
    return (
        <div className='detail-content'>
            <h2>{detail?.original_title} </h2>
            <p><strong>Release Date: </strong>{detail?.release_date} <span><strong>Run Time: </strong>{common.convertTime(detail?.runtime)}</span></p>
            <p><strong>Spoken Language: </strong>{detail?.spoken_languages.map((item: any) => item.name)}</p>
            <div className='tag-content'>
                {detail?.genres.map((value: Genre, idx: number) => {
                    return (
                        <div key={idx}>
                            <Tag name={value.name} />
                        </div>
                    )
                })}
            </div>
            <p className='italic-text'>{detail?.tagline}</p>
            <h3>Overview</h3>
            <p>{detail?.overview}</p>
        </div>
    )
}

export default ContentDetail;