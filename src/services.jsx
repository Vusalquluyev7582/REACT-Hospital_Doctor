import React from 'react'


const Service = (props) => {

    return (

        <div className="general">

            <div className="service-container">

                <div className="box">

                    <img src={props.image} />

                    <h2>{props.content}</h2>

                    <p>{props.text}</p>

                </div>

            </div>

        </div>

    )

}

export default Service