import "./ucd.css"
import needs from "../images/needs.png"
import needsG from "../images/needs_grouped.png"
import solution from "../images/solutions.png"
import {useState, useEffect} from "react"


export default function Images(props) {

    const images = props.images
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {

        let i = 0;

        const intervalId = setInterval(() => {
            setCurrentImage(images[i]);
            i = (i == images.length - 1) ? 0 : i+1;
            console.log(currentImage.offsetHeight)
        }, 5000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="bg-gray">
            <img src={currentImage} className="object-center"/>
        </div>
    )
}