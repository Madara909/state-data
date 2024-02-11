import React, { useEffect, useState } from 'react'
import './statewise.css';
import calling from './apicall';

const Statewise=() =>{
    const [data,setData]=useState([]);

    // const getCovidData= async () => {
    //     const res= await fetch('');
    //     const actualData = await res.json();
    //     console.log(actualData.Statewise);
    //     setData(actualData.Statewise);
    // }
    useEffect(() =>{
        calling(setData);
    },[]);

    return (
      <div>
        <div className="container-fluid mt-5">
          <div className="main-heading">
            <hl className="mb-5 text-centre">
              <span className="font-weight-bold">INDIA</span> COVID-19 Dashboard
            </hl>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>state </th>
                <th>confirmed </th>
                <th>recovered</th>
                <th>dead</th>
                <th>active </th>
                <th>updates</th>
              </tr>
              <tbody>
                {data.map((curElem, ind) => {
                  return (
                    <tr key={ind}>
                      <td>{curElem.state}</td>
                      <td>{curElem.confirmed}</td>
                      <td>{curElem.recovered}</td>
                      <td>{curElem.deaths}</td>
                      <td>{curElem.active} </td>
                      <td>{curElem.lastupdatedtime}</td>
                    </tr>
                  );
                })}
              </tbody>
            </thead>
          </table>
        </div>
      </div>
    );
}

export default Statewise;