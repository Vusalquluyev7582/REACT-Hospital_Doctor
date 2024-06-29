import React from 'react'

import Service from './services'

import info from './assets/info.json'

import doctors from './assets/doctor.json'

import Doctors from './Doctors'


const Container = () => {

  return (

    <div className="container">

      <div className="texts">

        <h2>Our Service</h2>

        <p>Our doctors have high qualified skills and are guaranteed to help you recover from your disease.</p>

      </div>


      <div className="infos">

        {

          info.map((m) => (

            <Service key={m.image} image={m.image} content={m.content} text={m.text} />

          )

          )

        }

      </div>


      <div className="secondtext">

        <h2>Meet Our Certified Online Doctors</h2>

        <p>Our online doctors have an average of 15 years experience and a 98% satisfaction rating, they really set us apart!</p>

        <div className="doctors">

          {

            doctors.map((m) => (

              <Doctors key={m.image} image={m.image} name={m.name} specialist={m.specialist} />

            )

            )

          }

        </div>

      </div>

    </div>

  )

}

export default Container