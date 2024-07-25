"use client"
import React from 'react'
import Image from 'next/image';
import { Chip } from "@nextui-org/chip";

function Card({ id, title, src, tags, onClick }) {
    return (
        <div className='bg-[#F2F4F7] xl:rounded-large md:rounded-medium rounded-small flex flex-col gap-4 md:w-[49%] w-full mb-6 md:p-10 p-5 h-auto justify-between' onClick={onClick}>
            <Image
                src={src}
                alt={"Project No. " + id}
                width={2048}
                height={2048}
                sizes=""
                priority
                style={{
                    objectFit: "cover",
                }}
                className='p-8'
            />
            <div className="flex flex-col">
                <span className="font-semibold text-[22px] leading-hero tracking-tighter">{title}</span>
                <div className="flex flex-row md:gap-4 gap-2 mt-3">
                    {tags.map((item, index) => (
                        <div key={index} className="flex flex-row gap-2">
                            <Chip color="warning" variant="bordered" className='border-black border-1.5 text-black'>{item}</Chip>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card