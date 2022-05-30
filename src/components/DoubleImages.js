import { useState, useEffect } from "react";

export default function DoubleImages(props) {
  const images_1 = props.images_1;
  const images_2 = props.images_2;

  const [currentImage1, setCurrentImage1] = useState(null);
  const [currentImage2, setCurrentImage2] = useState(null);

  useEffect(() => {
    let i = 0;

    const intervalId = setInterval(() => {
      setCurrentImage1(images_1[i]);
      setCurrentImage2(images_2[i]);
      i = i === images_1.length - 1 ? 0 : i + 1;
    }, 10000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="flex flex-row justify-evenly w-full items-center pt-8">
      <div>
        <img src={currentImage1} className="" alt="image1" />
      </div>
      <div>
        <img src={currentImage2} className="" alt="image2" />
      </div>
    </div>
  );
}
