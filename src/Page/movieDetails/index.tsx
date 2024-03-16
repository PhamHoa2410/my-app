import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Poster from './components/poster'
import ContentDetail from './components/content'
import './styles.scss'
import common from '../../utils/common'

type DetailPages = {

}
const MovieDetailPages: React.FC<DetailPages> = () => {
    const location = useLocation();
    const data = location.state.data;
    return (
        <div className="container">
            <div className="detail-container">
                <Poster src={data.poster_path ? `${common.img_300}/${data.poster_path}` : common.unavailable} />
                <ContentDetail detail={data} />
            </div>
        </div>
    )
}
export default MovieDetailPages;