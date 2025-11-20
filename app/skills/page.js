import React from 'react'

const page = ({ children }) => {
    return (
        <>
            <div className='h-screen flex justify-center items-center'>
                <div className='flex flex-col'>
                    <h1>React.js</h1>
                    <h1>Next.js</h1>
                </div>
            </div>
        </>
    )
}

export default page