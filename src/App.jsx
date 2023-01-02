import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo 01 - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
  // 01.1.1 - crie uma useState para seu email e atribua ao input do seu input
  // 01.1.2 - crie uma função que capture o valor digitado no email e atribua a sua useState
  // 01.2.1 - faça o mesmo para o password
  // 01.3.1 - valide o parâmetro disabled com a condição do todo
// todo 02 - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
  // 02.1.1 - atribua uma função quando o botão login for clicado
// todo 03 - Desabilite o botão de Login enquanto você está executando o login.
// todo 04 - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo 05 - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (event) => {
    const { value } = event.target
    setEmail(value)
  }
  const handlePassword = (event) => {
    const { value } = event.target
    setPassword(value)
  }
  const handleSubmit = () => {
    console.log('submitted')
  }
  
  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <div className='errorMessage'></div>

        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input 
            id={'email'} 
            type={'email'} 
            autoComplete='off' 
            value={email} 
            onChange={handleEmail}
          />
        </div>

        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input 
            id={'password'} 
            type={'password'} 
            value={password}
            onChange={handlePassword}
          />
        </div>

        <div className='button'>
          <button 
            // onClick={handleSubmit}
            disabled={email === '' || password.length < 6}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
