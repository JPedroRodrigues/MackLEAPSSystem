"use client"

import {useState, useEffect} from 'react'
import Image from 'next/image';
import Camera from "../../../public/icons/Camera.svg"

export default function InputImage(props) {
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
        props.onImageChange && props.onImageChange(newImageURL);

        // Avoiding memory leak
        return () => URL.revokeObjectURL(newImageURL);
    }, [image])

    const styles = {
        image: {
            borderRadius: "50%",
            backgroundColor: "var(--grey)",
            backgroundImage: `url(${imageURL})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "280px",
            height: "280px"
        },
        input: {
            display: "none"
        },
        label: {
            cursor: "pointer"
        },
    }

    return <>
            <label htmlFor="input--image" id="inptimage--label" style={styles.label}>
                {
                    image? 
                        <div style={styles.image} className="input--icon"></div> : 
                        <Image 
                            src={props.defaultImg? props.defaultImg : Camera} 
                            width={280} 
                            height={280}></Image>
                }
                <input type="file" style={styles.input} accept="image/*" onChange={imageChange} id='input--image' required/>
            </label>
    </>
}