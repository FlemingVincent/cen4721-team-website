import needs from "../images/needs.png"
import needsG from "../images/needs_grouped.png"
import solution from "../images/solutions.png"
import {useState, useEffect} from "react"


const images = [needsG, solution];

export default function Images() {
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 5000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <img src={currentImage} className="h-60 w-65 float-left"/>
        </div>
    )
}