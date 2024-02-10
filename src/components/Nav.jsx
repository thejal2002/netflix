import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show , setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>600){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })
  return (
    <div className={`${show && 'nav-bg'} navmedhu`} >
        <img width={'120px'} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="no image" />
    </div>
  )
}

export default Nav