import { useState, useEffect } from 'react';
import { checkState } from './api/Fetch';
import ButtonState from './components/ButtonState';
import Counter from './components/Counter';
import './App.scss';

function App() {
  const [active, setActive] = useState('Blue')
  const [msg, setMsg] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    let state = window.localStorage.getItem('active')
    if (state !== null) {
        setActive(state) 
    }
  }, [])

  const handleClick = async (nextState) => {
    // alert(state)
    setLoading(true)
    let result =  await checkState(active, nextState)
    if (result.msg) {
      clearAll(false, `Can't set ${active} to ${nextState}`)
      return
    }

    if (result.error) {
      clearAll(false, 'Request server error')
      return
    }

    clearAll(false, '')
    setActive(nextState)
  }

  const handleClear = () => {
    clearAll(false, '')
    setActive('blue')
  }

  const clearAll = (loading, msg) => {
    setLoading(loading)
    setMsg(msg)
  }

  const isActive = (currentState) => active === currentState

  return (
    <div className="App">
      <div className="error">{msg}</div>
      <ButtonState currentState='Green' handleClick={handleClick} isActive={isActive('Green')} />

      <div className="control-start">
        <ButtonState currentState='Blue' handleClick={handleClick} isActive={isActive('Blue')} />
        { isLoading && <Counter /> }
        <button className="button-reset" onClick={handleClear}><span>Reset</span></button>
      </div>

      <ButtonState currentState='Yellow' handleClick={handleClick} isActive={isActive('Yellow')} />
    </div>
  );
}

export default App;
