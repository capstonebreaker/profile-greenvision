import React from 'react'

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
        <div class="bg-[url('/assets/Background1.png')] bg-cover bg-center">
            <div className="container mx-auto py-10 ">
                <h2 className="text-3xl font-bold text-center text-primary_bg font-opensans">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-12 items-center justify-center h-screen">
                    {/* {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative text-white"
                        >
                            <div className={`w-26 h-26 rounded-full overflow-hidden absolute -bottom-12 transform -translate-x-1/2 border-[12px] border-gray-200 ${
                                index % 2 === 0 ? 'right-10' : 'left-40 scale-x-[-1]'
                            }`}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="justify-center flex bg-[url('/assets/Bg-teams.png')] w-[680px] h-[226px] items-center text-center">
                                <h3 className="text-2xl font-bold">{member.name}</h3>
                                <p class className='h-[300px]'Name="text-lg">{member.role}</p>
                                <p className="text-sm">{member.company}</p>
                            </div>
                        </div>
                    ))} */}
                    {/* aqna */}
                    <div className="relative text-white">
                        <div className='right-10 w-26 h-26 rounded-full overflow-hidden absolute -bottom-12 transform -translate-x-1/2 border-[12px] border-gray-300'>
                            <img
                                src="/assets/pteams.png"
                                alt="baisganteng"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="justify-center flex bg-[url('/assets/Bg-teams.png')] w-[680px] h-[226px] items-center text-center">
                            <div>
                                <img className='h-[300px]' src="/assets/pteams.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">aqna</h3>
                            </div>
                            <div>
                                <p className="text-lg">frontend</p>
                                <p className="text-sm">GreenVision</p>
                            </div>
                        </div>
                    </div>
                    {/* baisganteng */}
                    <div className="relative text-white">
                        <div className='left-40 scale-x-[-1] w-26 h-26 rounded-full overflow-hidden absolute -bottom-12 transform -translate-x-1/2 border-[12px] border-gray-300'>
                            <img
                                src="/assets/pteams.png"
                                alt="baisganteng"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="justify-center flex bg-[url('/assets/Bg-teams.png')] w-[680px] h-[226px] items-center text-center">
                        <div>
                                <img className='h-[300px]' src="/assets/pteams.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">baisganteng</h3>
                            </div>
                            <div>
                                <p className="text-lg">frontend</p>
                                <p className="text-sm">GreenVision</p>
                            </div>
                        </div>
                    </div>
                    {/* daffa */}
                    <div className="relative text-white">
                        <div className='left-40 scale-x-[-1] *:w-26 h-26 rounded-full overflow-hidden absolute -bottom-12 transform -translate-x-1/2 border-[12px] border-gray-300'>
                            <img
                                src="/assets/pteams.png"
                                alt="baisganteng"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="justify-center flex bg-[url('/assets/Bg-teams.png')] w-[680px] h-[226px] items-center text-center">
                        <div>
                                <img className='h-[300px]' src="/assets/pteams.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">daffatawon</h3>
                            </div>
                            <div>
                                <p className="text-lg">frontend</p>
                                <p className="text-sm">GreenVision</p>
                            </div>
                        </div>
                    </div>
                    {/* muhit */}
                    <div className="relative text-white">
                        <div className='right-10 w-26 h-26 rounded-full overflow-hidden absolute -bottom-12 transform -translate-x-1/2 border-[12px] border-gray-300'>
                            <img
                                src="/assets/pteams.png"
                                alt="baisganteng"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="justify-center flex bg-[url('/assets/Bg-teams.png')] w-[680px] h-[226px] items-center text-center">
                        <div>
                                <img className='h-[300px]' src="/assets/pteams.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">muhit gun shop</h3>
                            </div>
                            <div>
                                <p className="text-lg">frontend</p>
                                <p className="text-sm">GreenVision</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
