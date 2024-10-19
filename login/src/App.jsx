import './App.css'
import Login from './components/login'
import TelaLogin from './components/telaLogin'


function App() {

  return (
    <>
      <div className="conteudo">
        <div>
          <Login />
        </div>
        <div className="tela-login">
          <TelaLogin />
        </div>
      </div>
    </>

  )
}

export default App
