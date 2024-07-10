
import React, { useState } from 'react'
import Image from 'next/image'

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    }

    return (
        <div className="grid gap-4 p-4 md:p-8 lg:p-12">
            <div>
                {selectedImage ? (
                    <Image className="h-auto max-w-full rounded-lg" src={selectedImage} alt="" width={2000} height={1000} />
                ) : (
                    <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_1.jpeg" alt="" width={2000} height={1000} />
                )}
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div onClick={() => handleImageClick("/img/carosoul_2.jpeg")}>
                    <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_2.jpeg" alt="" width={200} height={200} />
                </div>
                <div onClick={() => handleImageClick("/img/carosoul_3.jpeg")}>
                    <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_3.jpeg" alt="" width={200} height={200} />
                </div>
                <div onClick={() => handleImageClick("/img/carosoul_4.jpeg")}>
                    <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_4.jpeg" alt="" width={200} height={200} />
                </div>
                <div onClick={() => handleImageClick("/img/carosoul_5.jpeg")}>
                    <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_5.jpeg" alt="" width={200} height={200} />
                </div>
                <div onClick={() => handleImageClick("/img/carosoul_1.jpeg")}>
                    <Image className="h-auto max-w-full rounded-lg" src="/img/carosoul_1.jpeg" alt="" width={200} height={200} />
                </div>
            </div>
        </div>
    )
}