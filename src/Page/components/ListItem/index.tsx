import * as React from 'react'
import { ItemsProps, fakeData } from './interface';
import Items from '../Items';
import './styles.scss'
import { useNavigate } from 'react-router-dom';
type ListItemsProps = {
    data?: any
}
const ListItems: React.FC<ListItemsProps> = (props) => {
    const data = props.data ? props.data : fakeData
    const navigate = useNavigate()

    const seeDetail = () => {
        navigate('/movieDatails')
    }
    return (
        <div className='list-container'>
            <div className='list-items'>
                {data.map((item: ItemsProps, idx: number) => {
                    return (
                        <Items onClick={() => seeDetail()} key={idx} src={item.poster_path} title={item.original_title} release_date={item.release_date} />
                    )
                })}
            </div>
        </div>

    )
}

export default ListItems;