import React from 'react'
import {motion} from 'framer-motion'

export default function Card({info}) {
    return (
            <motion.div initial={{scale:1.5,x:600,y:-100}} 
                animate={{scale:1,x:0,y:0}}  
                transition={{delay:2,type:'spring'}}  
                className="card mt-5" style={{width:270,background:"none",border:"none"}}>
                    <div className="card-body p-1">
                        <h4 className="card-title">{info.name}</h4>
                        <img
                            style={{width: 120,height: 120,}}
                            src={`https://openweathermap.org/img/w/${info.icon}.png`}
                            alt="hello"
                            />
                        <h4 className="card-subtitle mb-2">{info.temp}&deg;</h4>
                        <h6 className="card-text">({info.desc})</h6>
                        <h5 className="card-subtitle mb-2">Humidity - {info.humidity}</h5>
                    </div>
            </motion.div> 
    )
}
