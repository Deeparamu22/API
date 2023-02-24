import React, { useRef, useState } from 'react'
import style from './Whole.module.css'

export default function Whole() {
    const [Class,setClass]=useState(null);
    const imgref=useRef(null);
    const handleclick=(e)=>{
        if(e.target.parentElement.children[2].value!==''&&/^(?!\s)[\w\s-]*$/.test(e.target.parentElement.children[2].value)){
            console.log(imgref.current.src);
            imgref.current.src=`https://api.qrserver.com/v1/create-qr-code/?size=190x190&data=${e.target.parentElement.children[2].value}`
        setClass("newclass");
        }
        else{
            console.log("hjk");
            setClass("");
        }
    }
  return (
    <div className={style.whole}>
        <div className={style.insideDiv+" "+style[Class]}>
            <h1>QR Code Generator </h1>
            <p>Paste the url or text to create QR code</p>
            <input type={'text'} className={style.input}/>
            <button className={style.button} onClick={handleclick}>Generate QR Code</button>
            <div className={style.qr+" "+style[Class]}>
                    <img src='' className={style.image} alt="qr" ref={imgref}/>
            </div>
        </div>

    </div>
  )
}