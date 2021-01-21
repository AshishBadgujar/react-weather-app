import React from 'react'

export default function Card({info}) {
    return (
            <div className="card shadow cardCont m-3 pb-1" style={{width:"18rem"}}>
            <div className="card-body">
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
            </div> 
    )
}
