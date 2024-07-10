import React from 'react'
import Image from 'next/image'

export const Gallery = () => {
    return (
        <div className="grid gap-4 p-4 md:p-8 lg:p-12">
            <div>
                <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_1.jpeg" alt="" width={2000} height={1000}/>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_2.jpeg" alt="" width={200} height={200}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_3.jpeg" alt="" width={200} height={200}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_4.jpeg" alt="" width={200} height={200}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_5.jpeg" alt="" width={200} height={200}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_1.jpeg" alt="" width={200} height={200}/>
                </div>
            </div>
        </div>
    )
}