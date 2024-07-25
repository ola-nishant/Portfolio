import React from 'react'
import Image from 'next/image';
import { Chip } from "@nextui-org/chip";

function Card({ id, title, src, tags }) {
    return (
        <div className='bg-[#F2F4F7] xl:rounded-large md:rounded-medium rounded-small flex flex-col gap-4 md:w-[49%] w-full mb-6'>
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
                className="2xl:h-[140px] xl:rounded-large md:h-[120px] md:rounded-medium h-[80px] rounded-small"
            />
            <div className="flex">
                <span className="font-semibold text-[22px] ml-1">{title}</span>
                {tags.map((item, index) => (
                    <div key={index} className="flex flex-row gap-1">
                        <Chip color="warning" variant="bordered" className='border-black text-black'>{item}</Chip>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card