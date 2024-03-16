import * as React from 'react'
import { ItemsProps } from './interface';
import Items from '../Items';
import './styles.scss'
import { useNavigate } from 'react-router-dom';
import { Access_key } from '../../config';
import common from '../../../utils/common';
import { UseGetListRending } from './hooks';
import Pagination from '../Pagination';
import Loading from '../Loading';
type ListItemsProps = {
    type: 'nowPlaying' | 'topRate'
}
const ListItems: React.FC<ListItemsProps> = (props) => {
    const { type } = props
    const navigate = useNavigate()
    const { getListMovie, nowPlaying, page, setPage, isShow, viewDetail } = UseGetListRending(type)
    return (
        <div className='list-container'>
            <Loading isShow={isShow} />
            <div className='list-items'>
                {nowPlaying.map((item: ItemsProps, idx: number) => {
                    return (
                        <Items onClick={() => viewDetail(item)}
                            key={idx}
                            src={item.poster_path ? `${common.img_300}/${item.poster_path}` : common.unavailable}
                            title={item.name || item.title}
                            media={item.media_type === "tv" ? "TV" : "Movie"}
                            release_date={item.first_air_date || item.release_date} />
                    )
                })}
            </div>
            <Pagination page={page} setPage={setPage} />
        </div>

    )
}

export default ListItems;