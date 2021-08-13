import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [size, setSize] = useState(0)

    const makeLoading = () => {
        let dot = ''
        for (let i = 0; i < size; i++) {
            dot += '.'
        }
        return dot
    }

    useEffect(() => {
        let c = window.setInterval(() => {
            setSize(counter => {
                return counter > 5 ? 1 : counter + 1
            })
        }, 1000)
        return () => clearInterval(c)
    }, [])
    return (
        <div className="loading"><span>{makeLoading()}</span></div>
    )
}

export default Counter
