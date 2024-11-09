import React from 'react';
import TopNavbar from './TopNavbar';
import Image from 'next/image';

const DashMain = () => (
    <div className='h-full flex flex-col gap-[1rem]'>
        <div>
            <TopNavbar route={"Overview"} userName={"Ayush Awasthi"} />
        </div>
        <div className='flex gap-[1rem] h-[35%]'>
            <div className='bg-white rounded-3xl w-3/4'></div>
            <div className='bg-white rounded-3xl w-3/4'></div>
            <div className='flex flex-col gap-[1rem] rounded-3xl w-1/4'>
                <div className='bg-white h-2/3 rounded-3xl w-full'></div>
                <div className='bg-white h-1/3 rounded-3xl w-full'></div>
            </div>
        </div>
        <div className='flex gap-[1rem] h-[65%]'>
            <div className={'flex flex-col gap-[1rem] w-[70%]'}>
                <div className='bg-yellow-300 h-[30%] rounded-3xl'>
                    <Image src="/images/premium-bg.png" className="w-full h-full" alt="Logo" width={1800} height={700} />
                </div>
                <div className='bg-white h-[70%] rounded-3xl'></div>
            </div>
            <div className='bg-white rounded-3xl w-[30%]'></div>
        </div>
    </div>
)

export default DashMain;
