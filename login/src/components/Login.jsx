import junin from '../assets/junin.png'
import logoBranca from '../assets/logoBranca.png'
import "./login.css"

function Login() {
    return (
        <div className="container">
            <div className="imagens">
                <img src={logoBranca} alt="" className="logo" />
            </div>
            <div className="imagens1">
                <img src={junin} alt="" className="junin"/>
            </div>
        </div>
    )
}

export default Login