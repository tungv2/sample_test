import React from 'react'
import './ButtonState.modules.scss'

const ButtonState = ({ handleClick, currentState, isActive }) => {
    const styleClass = () => `test-outer ${isActive ? 'is-active' : ''}`
    const clientClick = () => !isActive && handleClick(currentState)

    return (
        <div className={styleClass()}>
            <button className='test-inner' onClick={clientClick}>
                <span>{currentState}</span>
            </button>
        </div>
    )
}

export default ButtonState
