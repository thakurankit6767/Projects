import React from "react";
import { useEffect,useState } from "react";
import "./covid.css"

const Covid = () => {
    const [data,setData]=useState([])
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const data = await res.json();
      console.log(data.statewise[0]);
      setData(data.statewise[0]);
    } catch (err) {
      alert("SomeThing Went Wrong");
    }
  };


//   active: "363849"
// confirmed: "32249900"
// deaths: "432112"
// deltaconfirmed: "24692"
// deltadeaths: "438"
// deltarecovered: "36862"
// lastupdatedtime: "13/08/2021 23:27:22"
// migratedother: "12679"
// recovered: "31441260"
// state: "Total"
// statecode: "TT"
// statenotes: ""

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
    <section>
      <h2>Covid-19 CoronaVirus Tracker</h2>
      <ul>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
                <p className="card_name"> <span>OUR</span> COUNTRY</p>
                <p className="card_total card_small">India</p>
            </div>
          </div>
        </li>


        <li className="card">
          <div className="card_main">
            <div className="card_inner">
                <p className="card_name"> <span>TOTAL</span> RECOVERD</p>
                <p className="card_total card_small">{data.recovered}</p>
            </div>
          </div>
        </li>


        <li className="card">
          <div className="card_main">
            <div className="card_inner">
                <p className="card_name"> <span>TOTAL</span> CONFIRMED</p>
                <p className="card_total card_small">{data.confirmed}</p>
            </div>
          </div>
        </li>



        <li className="card">
          <div className="card_main">
            <div className="card_inner">
                <p className="card_name"> <span>TOTAL</span> DEATH</p>
                <p className="card_total card_small">{data.deaths}</p>
            </div>
          </div>
        </li>


        <li className="card">
          <div className="card_main">
            <div className="card_inner">
                <p className="card_name"> <span>TOTAL</span> ACTIVE</p>
                <p className="card_total card_small">{data.active}</p>
            </div>
          </div>
        </li>


        <li className="card">
          <div className="card_main">
            <div className="card_inner">
                <p className="card_name"> <span>LAST</span> UPDATE</p>
                <p className="card_total card_small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </li>
      </ul>
      </section>
    </>
  );
};

export default Covid;
