import React from 'react';
import PropTypes from 'prop-types';
import TopNavbar from './TopNavbar';


const SessionStart = () => {
    return (
        <div className='h-full flex flex-col gap-[1rem]'>
            <div>
                <TopNavbar route={"Session"} userName={"Ayush Awasthi"} />
            </div>
            <div className='flex gap-[1rem] h-full bg-white rounded-3xl'>
                
            </div>
        </div>
    );
};
export default SessionStart;
