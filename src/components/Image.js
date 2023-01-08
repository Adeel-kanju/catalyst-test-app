import React, {useState, useContext} from "react"
import {Context} from "../Context"

function Image({img, className}) {
    const [hovered, setHovered] = useState(false)
    //console.log(hovered)
    const {toggleFavorite} = useContext(Context)
    const favoritetIcon = hovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    const addCartIcon = hovered && <i className="ri-add-circle-line cart"></i> 
    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" />
            {favoritetIcon}
            {addCartIcon}
        </div>
    )
}

export default Image