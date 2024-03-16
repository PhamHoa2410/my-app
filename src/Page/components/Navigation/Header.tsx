import * as React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import './style.scss'
import common from '../../../utils/common'

type props = {}

const Header: React.FC<props> = () => {

    const navigate = useNavigate()

    const onLogout = async () => {
        const res = await common.openConfirm({
            title: "Log Out?",
            text: "Do you want to log out of this account?",
            confirmButtonText: "Yes"
        })
        if (res.value) {
            localStorage.clear()
            navigate('/login')
        }

    }

    return (
        <div className="nav-container">
            <div className="nav-content">
                <div className="flex-nav">
                    <div className="left-container"><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link></div>
                    <div className="right-container" onClick={onLogout}>
                        Log Out
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
