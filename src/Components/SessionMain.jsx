import React from 'react';
import PropTypes from 'prop-types';
import TopNavbar from './TopNavbar';
import Image from 'next/image';


const SessionMain = () => {
    return (
        <div className='h-full flex flex-col gap-[1rem]'>
            <div>
                <TopNavbar route={"Session"} userName={"Ayush Awasthi"} />
            </div>
            <div className='flex gap-[1rem] h-full bg-white rounded-3xl'>

                <div className="place-self-center flex flex-col gap-[3rem]" style={{ width: '100%', textAlign: 'center', }}>
                    <div>
                        <h2 className="flex items-center justify-center h-10 " style={{ fontSize: '1.5rem', fontWeight: 'bold', padding: '1px' }}>Start your session with Sanidh</h2>
                        <h4 className="flex items-center justify-center h-10 ">Hi there! 👋 I'm SANIDH, your AI medical assistant, here to provide you with quick, reliable health information and<br /> support. Let's take a step toward better health together! 😊</h4>
                    </div>
                    {/* <div className={'flex flex-col gap-[1rem] w-[70%]'}>
                    <div className='bg-yellow-300 h-[30%] rounded-3xl relative'>
                        <Image src="/images/Frame 2609065.png" className="z-10 w-full h-full absolute object-cover rounded-3xl" alt="Logo" width={1800} height={700} />
                    </div>
                </div> */}
                    <div className="container">
                        <div className=" rounded-3xl w-[50%] h-[7rem] mx-auto relative">
                            <Image src="/images/premium-bg.png" className="absolute w-full h-full object-cover rounded-3xl" alt="Logo" width={1800} height={500} />
                            <div className='z-20 absolute p-5 flex left w-full '>
                            
                                <div className='flex justify-left align-left font-bold text-[1.3rem]'style={{padding: '15px'}}>Upload Your First Document</div>
                                {/* <div className='w-[70%]'>aaaa</div> */}
                                
                                <div className="flex justify-right padding: 10px 20px vertical-align: top-0 justify-content: space-right">aaa
                                </div>
                                
                            
                            
                        </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}


            </div>
        </div>
    );
};
export default SessionMain;
