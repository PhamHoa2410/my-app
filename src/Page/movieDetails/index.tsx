import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Poster from './components/poster'
import ContentDetail from './components/content'
import './styles.scss'
import common from '../../utils/common'
import { UseGetDetailMovies } from './hook'
import Loading from '../components/Loading'

type DetailPages = {

}
const MovieDetailPages: React.FC<DetailPages> = () => {
    const location = useLocation();
    const data = location.state.data;
    const { getDetail, isShow } = UseGetDetailMovies(data)
    return (
        <div className="container">
            <Loading isShow={isShow} />
            <div className="detail-container">
                <Poster src={getDetail?.poster_path ? `${common.img_300}/${getDetail?.poster_path}` : common.unavailable} />
                <ContentDetail detail={getDetail} />
            </div>
        </div>
    )
}
export default MovieDetailPages;