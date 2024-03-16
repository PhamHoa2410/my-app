import * as React from 'react'
import ImageItems from './componenst/Image/image';
import './styles.scss'
import ContentItems from './componenst/Content/content';
type ItemsProps = {
    src: string,
    title: string,
    release_date: string,
    onClick: () => void
}
const Items: React.FC<ItemsProps> = (props) => {
    const { src, title, release_date, onClick } = props
    return (
        <div className='items__content' onClick={onClick}>
            <ImageItems src={src} />
            <ContentItems title={title} release_date={release_date} />
        </div>
    )
}

export default Items;