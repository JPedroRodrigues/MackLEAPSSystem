"use client"

import {useState, useEffect} from 'react'
import Image from 'next/image';
import Camera from "../../../public/icons/Camera.svg"

export default function InputImage() {
    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState();

    function imageChange(e) {
        if (!e.target.files || e.target.files.length === 0) {
            setImage(undefined)
            return
        }

        setImage(e.target.files[0])
    }

    useEffect(() => {
        if (!image) {
            setImageURL(Camera);
            return;
        }
        
        const newImageURL = URL.createObjectURL(image);
        setImageURL(newImageURL);

        // Avoiding memory leak
        return () => URL.revokeObjectURL(newImageURL);
    }, [image])

    return <>
            <label htmlFor="input--image" id="inptimage--label">
                <Image
                    src={imageURL}
                    alt='Camera Icon'
                    width={280}
                    height={280}
                    className="input--icon"
                ></Image>
                <input type="file" accept="image/*" onChange={imageChange} id='input--image'/>
            </label>
    </>
}