import * as React from 'react'
import { useNavigate } from 'react-router-dom'

type props = {}

const Login: React.FC<props> = () => {
    const navigate = useNavigate()

    const onLogin = async () => {
        navigate('/')

    }
    return (
        <div className="container--root">
            <div className="container flex-center-column ">
                <div className='content text-align-center '>
                    This is the Login Page.
                    I haven't dev this page yet.
                    So please hit the Button to navigate back to the Home Screen
                </div>
                <div className='content text-align-center '>
                    <button onClick={() => onLogin()} className={'primary-button btn'}>
                        Return to Home Screen
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Login;