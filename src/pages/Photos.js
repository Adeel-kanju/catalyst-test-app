import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"
import {getClass} from "../uitills"

function Photos() {
    const {allPhotos} = useContext(Context)
    const imgElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)}/>
    ))
    return (
        <main className="photos">
            {imgElements}
        </main>
    )
}

export default Photos