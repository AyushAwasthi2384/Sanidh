import React from 'react';

const DashMain = () => (
    <div className='h-full flex flex-col gap-[1rem]'>
        <div className='flex gap-[1rem] h-1/2'>
            <div className='bg-white rounded-3xl w-3/4'>a</div>
            <div className='flex flex-col gap-[1rem] rounded-3xl w-1/4'>
                <div className='bg-white h-1/2 rounded-3xl w-full'></div>
                <div className='bg-white h-1/2 rounded-3xl w-full'></div>
            </div>
        </div>
        <div className='flex gap-[1rem] h-1/2'>
            <div className='bg-white rounded-3xl w-1/4'>a</div>
            <div className={'bg-white rounded-3xl w-3/4 p-2'}>

            </div>
        </div>
    </div>
)

export default DashMain;
