import React from 'react'

const Doctors = (props) => {

    return (

        <div className="umumi">

            <div className="doctors-container">

                <div className="card">

                    <img src={props.image} />

                    <h2>{props.name}</h2>

                    <p>{props.specialist}</p>

                </div>

            </div>

        </div>

    )

}

export default Doctors