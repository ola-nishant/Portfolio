import React from 'react';
import {Divider} from "@nextui-org/react";

function Hobbies() {
    return (
        <div className="flex md:flex-col flex-row md:items-end items-start">
            <div className="flex flex-col md:w-[80%] w-full my-2 md:items-stretch items-start">
                <div className="flex md:flex-row flex-col h-5 md:items-end items-start justify-between text-[#5f6980] md:flex-wrap">
                    <div>Reading fiction books</div>
                    <Divider orientation="vertical" className='hidden md:block' />
                    <div>Sketching portraits</div>
                    <Divider orientation="vertical" className='hidden md:block' />
                    <div>Solo Travelling</div>
                    <Divider orientation="vertical" className='hidden md:block' />
                    <div>Listening to music on repeat</div>
                </div>
            </div>
        </div>
    )
}

export default Hobbies