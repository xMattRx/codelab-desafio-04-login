import './App.scss';

const App: React.FC = () => {


  return (
    <div className="login">
      <div className="login__image">
        <img src="/src/assets/svg.png" alt="" />
      </div>
      <div className="login__content">
        <div className="login__signIn">
          <h2 className="login__welcome">Bem-vindo de volta</h2>
          <h3 className="login__title">Faça login na sua conta</h3>
          <form className="login__form" action="">
            <label htmlFor="">E-mail</label>
            <input className="login__emailInput" placeholder="exemplo@gmail.com" type="email" />
            <label htmlFor="">Senha</label>
            <input className="login__passwordInput" placeholder="0123456789" type="password" />

            <div className="login__remember">
              <div className="login__rememberContainer">
                <input className="login__inputRadio" type="radio" name="" id="" />
                <span className="login__rememberMe">Lembre de mim</span>
              </div>
              <a className="login__forget" href='#'>Esqueceu a senha?</a>
            </div>
            <input className="login__enter" type="submit" value="Entrar na conta" />
            <button className="login__google">
              <img src="/src/assets/icon.png" alt="" />
              Ou faça login com o Google
            </button>
            <p className="login__noAccount">Não tem uma conta? <a href="#">Cadastre-se</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
