import React from 'react';
import Sdata from "./Sdata"
import Card from './Card';
const Services = () => {
    return (
        <>
        <div className="my-5">
        <div className="text-center">
      <div>  <h2>Our Services</h2>
      </div>
        <div className="container-fluid mb-3">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row gy-4">
        {
          Sdata.map((val, ind)=> {
            return <Card key={ind}
            imgsrc={val.imgsrc}
            title={val.title} />
          })
        }
     
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
        </>
    )
}

export default Services
