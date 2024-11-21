import React from 'react'
import Mockup from '/assets/mockupGV.png'

function Feature() {
    return (
        <div class="bg-[url('/assets/Background2.png')] bg-cover bg-center h-screen">
            <div className='container mx-auto'>
                <div className='flex justify-center space-x-4 z-10 py-10'>
                    <h2 className='text-primary_text text-4xl font-semibold'>Features</h2>
                </div>
                <div className='my-8 flex justify-between items-center z-10'>
                    <div>
                        <img src={Mockup} alt="Apps GreenVision" />
                    </div>
                    <div>
                        <div className=' bg-white bg-opacity-10 h-32 w-[400px] mb-2 rounded-xl border'>hallo semuanya</div>
                        <div className=' bg-white bg-opacity-10 h-32 w-[400px] mb-2 rounded-xl border'>hallo semuanya</div>
                        <div className=' bg-white bg-opacity-10 h-32 w-[400px] mb-2 rounded-xl border'>hallo semuanya</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
