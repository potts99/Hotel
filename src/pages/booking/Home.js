import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const { user } = useSelector((state) => ({ ...state }))
    
    return (
        <div className="container-fluid">
            <h1 className="text-center p-5">Home page</h1>
        </div>
    )
}

export default Home
