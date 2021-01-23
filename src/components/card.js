import React from 'react'
import {motion} from 'framer-motion'

export default function Card({info}) {
    return (
            <motion.div initial={{scale:1.5,x:600,y:-100}} 
                animate={{scale:1,x:0,y:0}}  
                transition={{delay:2,type:'spring'}}  
                className="card mt-3" style={{width:"100%",background:"none",border:"none"}}>
                    <div className="card-body p-1">
                        <h3 className="card-title">{info.name}</h3>
                        <img
                            style={{width: 120,height: 120,}}
                            src={`https://openweathermap.org/img/w/${info.icon}.png`}
                            alt="hello"
                            />
                        <h3 className="card-subtitle mb-2">{info.temp}&deg;</h3>
                        <h4 className="card-text">({info.desc})</h4>
                        <h4 className="card-subtitle mb-2">Humidity - {info.humidity}</h4>
                    </div>
            </motion.div> 
    )
}
