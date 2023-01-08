import React, {useState} from "react"

function Image({img, i}) {
    const [hovered, setHovered] = useState(false)
    console.log(hovered)
    return (
        <div  onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

export default Image