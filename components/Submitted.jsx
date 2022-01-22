import React, { useEffect } from 'react'
import confetti from "canvas-confetti"

export default function Submitted() {
    useEffect(() => {


      setInterval(() => {



        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
          }
          
          confetti({
            angle: randomInRange(55, 125),
            spread: randomInRange(50, 70),
            particleCount: randomInRange(50, 100),
            origin: { y: 0.6 }
          });



      }, 1300);


    } , [])

    return (
        <>
            <h1 className='my-8 text-center text-2xl'>Congrats Appointment Booked 🚀</h1>
            
        </>
    )
}
