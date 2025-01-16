import React from 'react'
import Vektor from '/assets/star.png'
import Muhit from '/assets/Muhit.png'
import Aqna from '/assets/aqna1.png'
import Bais from '/assets/bais1.png'
import Dapa from '/assets/dapa1.png'
import Muhit1 from '/assets/muhit1.png'
import Aqna2 from '/assets/aqna.png'
import Bais3 from '/assets/bais.png'
import Dapa4 from '/assets/dapa.png'
function Team() {
    // const teamMembers = [
    //     {
    //         name: 'Bumsyaa',
    //         role: 'FrontEnd Developer',
    //         company: 'GreenVision',
    //         image: '/assets/pteams.png',
    //     },
    //     {
    //         name: 'Bumsyaa',
    //         role: 'Project Manager',
    //         company: 'GreenVision',
    //         image: '/assets/pteams.png',
    //     },
    //     {
    //         name: 'Bumsyaa',
    //         role: 'BackEnd Developer',
    //         company: 'GreenVision',
    //         image: '/assets/pteams.png',
    //     },
    //     {
    //         name: 'Bumsyaa',
    //         role: 'Mobile Developer',
    //         company: 'GreenVision',
    //         image: '/assets/pteams.png',
    //     },
    // ];
    return (
        <div id='team' class="bg-[url('/assets/Background1.png')] bg-cover bg-center h-screen">
            <div className="container mx-auto py-10 ">
                <h3 className='font-Cormorant text-2xl text-primary_bg text-center font-semibold'>Green Vision</h3>
                <div className="w-1/2 flex justify-center">
                    <img
                        src={Vektor}
                        alt="Apps GreenVision"
                        className=""
                    />
                </div>
                <h2 className="text-3xl font-bold text-center text-primary_bg font-opensans">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-12 items-center justify-center">
                    {/* aqna */}
                    <div>
                        <div className="relative text-white mt-12">
                            <div className='right-10 w-26 h-26 rounded-full overflow-hidden absolute -bottom-16 transform -translate-x-1/2 border-[12px] border-gray-300'>
                                <img
                                    src={Muhit1}
                                    alt="baisganteng"
                                    className="w-[100px] h-[100px] object-cover"
                                />
                            </div>
                            <div className="flex bg-[url('/assets/Bg-teams.png')] w-[680px] h-[226px] items-center text-center">
                               <div>
                                <img className='mb-12 mr-32' src={Muhit} alt="" />
                               </div>
                                <div className='text-right absolute right-24 mb-5'>
                                    <p className="text-lg font-semibold italic">Mobile Developer</p>
                                    <div className='border border-white'/>
                                    <p className="text-lg font-semibold">GreenVision</p>
                                </div>
                            </div>
                        </div>
                        {/* baisganteng */}
                        <div className="relative text-white mt-32">
                            <div className='left-40 scale-x-[-1] w-26 h-26 rounded-full overflow-hidden absolute -bottom-16 transform -translate-x-1/2 border-[12px] border-gray-300'>
                                <img
                                    src={Aqna}
                                    alt="baisganteng"
                                    className="w-[100px] h-[100px] object-top"
                                />
                            </div>
                            <div className="justify-center flex bg-[url('/assets/Bg-teams.png')] w-[680px] h-[226px] items-center text-center">
                                <div className='text-left absolute left-24 mb-5'>
                                    <p className="text-lg font-semibold italic">UI/UX Design</p>
                                    <div className='border border-white'/>
                                    <p className="text-lg font-semibold">GreenVision</p>
                                </div>
                                <div className='absolute right-8'>
                                <img className='mb-12' src={Aqna2} alt="" />
                               </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        {/* daffa */}
                        <div className="relative text-white mt-12">
                            <div className='left-40 scale-x-[-1] *:w-26 h-26 rounded-full overflow-hidden absolute -bottom-16 transform -translate-x-1/2 border-[12px] border-gray-300'>
                                <img
                                    src={Bais}
                                    alt="baisganteng"
                                    className="w-[100px] h-[100px] object-top"
                                />
                            </div>
                            <div className="justify-center flex bg-[url('/assets/Bg-teams.png')] w-[680px] h-[226px] items-center text-center">
                                 <div className='text-left absolute left-24 mb-5'>
                                    <p className="text-lg font-semibold italic">Frontend Developer</p>
                                    <div className='border border-white'/>
                                    <p className="text-lg font-semibold">GreenVision</p>
                                  </div>
                                 <div className='absolute right-8'>
                                <img className='mb-12' src={Bais3} alt="" />
                                 </div>
                              
                            </div>
                        </div>
                        {/* muhit */}
                        <div className="relative text-white mt-32">
                            <div className='right-10 w-26 h-26 rounded-full overflow-hidden absolute -bottom-16 transform -translate-x-1/2 border-[12px] border-gray-300'>
                                <img
                                    src={Dapa}
                                    alt="baisganteng"
                                    className="w-[100px] h-[100px] object-top"
                                />
                            </div>
                            <div className="justify-center flex bg-[url('/assets/Bg-teams.png')] w-[680px] h-[226px] items-center text-center">
                                <div>
                                <img className='mb-12 mr-32' src={Dapa4} alt="" />
                               </div>
                               <div className='text-right absolute right-24 mb-5'>
                                    <p className="text-lg font-semibold italic">Backend Developer</p>
                                    <div className='border border-white'/>
                                    <p className="text-lg font-semibold">GreenVision</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
