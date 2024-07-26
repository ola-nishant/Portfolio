import React from 'react';
import {Divider} from "@nextui-org/react";

function Hobbies() {
    return (
        <div className="flex lg:flex-col flex-row lg:items-end items-start mb-[75px] lg:mb-4">
            <div className="flex flex-col lg:w-[80%] w-full my-2 lg:items-stretch items-start">
                <div className="flex lg:flex-row flex-col h-5 lg:items-end items-start justify-between text-[#5f6980] lg:flex-wrap">
                    <div>Reading fiction books</div>
                    <Divider orientation="vertical" className='hidden lg:block' />
                    <div>Sketching portraits</div>
                    <Divider orientation="vertical" className='hidden lg:block' />
                    <div>Solo Travelling</div>
                    <Divider orientation="vertical" className='hidden lg:block' />
                    <div>Listening to music on repeat</div>
                </div>
            </div>
        </div>
    )
}

export default Hobbies