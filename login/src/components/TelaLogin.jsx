import "./TelaLogin.css"

function TelaLogin() {
    return (
      <form className="container-form">
        <h1>Recuperação de Senha</h1>

        <div className="input-email">
          <input type="email" id="email" className="input" placeholder="Digite seu e-mail cadastrado na plataforma " />
        </div>

        <div className="paragrafo">
        <p>Enviamos um e-mail para você com um código que permitirá a troca da sua senha. Por favor, insira o código recebido no campo abaixo para prosseguir com a alteração.</p>
        </div>

        <div className="input-codigo">
          <input type="number" id="codigo" className="input" placeholder="Informe o código recebido" />
        </div>
  
        <div className="botao">
          <p>Enviar Código</p>
        </div>
      </form>
    )
  }
  
  export default TelaLogin
  