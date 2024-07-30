import { useEffect, useRef, useState } from "react";

function imgRotate({img , styleImg}) {
    const [angle, setAngle] = useState(0);
    const boxRef = useRef(null);
    const requestRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const box = boxRef.current;
            const rect = box.getBoundingClientRect();
            const boxCenterX = rect.left + rect.width / 2;
            const boxCenterY = rect.top + rect.height / 2;
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const deltaX = mouseX - boxCenterX;
            const deltaY = mouseY - boxCenterY;
            const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setAngle(newAngle);
        };

        const animate = () => {
            requestRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);
  return (
    <img src={img} ref={boxRef} className={`rotate-[${angle}deg] ${styleImg}`} alt="" />
  )
}

export default imgRotate