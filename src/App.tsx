import './styles/global.css'
import './styles/theme.css'
import { Container } from './component/Container/index.tsx';
import { Logo } from './component/Logo/index.tsx';
import { Menu } from './component/Menu/index.tsx';
import { CountDown } from './component/CountDown/index.tsx';
import { DefaultInput } from './component/DefaultInput/index.tsx';

export function App() {

  return (
    <>
      <Container>
        <Logo />
        
       </Container>
       <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
      <form className= "form"action="">
        <div className= 'formRow'>
          <label htmlFor="meuInput">label</label>
          <input id = "meuInput" type='text' />
          <DefaultInput labelText = 'label' id = "meuInput" type = 'text' />
        </div>
        <div className='formRow'>
                <p>Escrever seu formulario</p>
        </div>
             <div className='formRow'>
                <p>0 0 0 0 0 0 0</p>
        </div>
             <div className='formRow'>
                <button>Enviar</button>
        </div>
      </form>
      </Container>
    
    </>
  )
}