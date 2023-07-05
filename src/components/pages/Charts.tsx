/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ApexChart from "../ApexChart";
import LeafletMap from "../LeafletMap";
import Sidebar from "../Sidebar";

const Charts = () => {
  const [content, setContent] = useState(true);

  const toggle = () => {
    setContent(!content);
  }

  const [cases, setCases] = useState([] as any);
  const [deaths, setDeaths] = useState([] as any);
  const [recovered, setRecovered] = useState([] as any);

  const getData = async () => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response: { data: { cases: any; deaths: any; recovered: any; }; }) => {
        let { cases, deaths, recovered } = response.data;

        let casesDataPoints = [] as any;
        let deathsDataPoints = [] as any;
        let recoveredDataPoints = [] as any;

        Object.entries(cases).forEach((item: any) => {
          let date = new Date(item[0]);
          casesDataPoints.push([date.getTime(), item[1]]);
        });

        Object.entries(deaths).forEach((item: any) => {
          let date = new Date(item[0]);
          deathsDataPoints.push([date.getTime(), item[1]]);
        });

        Object.entries(recovered).forEach((item: any) => {
          let date = new Date(item[0]);
          recoveredDataPoints.push([date.getTime(), item[1]]);
        })

        setCases(casesDataPoints);
        setDeaths(deathsDataPoints);
        setRecovered(recoveredDataPoints)
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="flex lg:flex-row flex-col">
      <Sidebar />

      <div className="lg:w-[1190px] w-full flex flex-col justify-center items-center mb-16">
        <div className="w-full bg-cyan h-20 flex justify-center items-center">
          <p className="text-black text-lg font-medium tracking-wider">
            Charts And Maps
          </p>
        </div>

        {!content ? (
          <div className="flex items-center gap-5">
            <p className="p-4 text-base text-cyan uppercase cursor-pointer font-medium">
              Line Graph
            </p>
            <p
              className="p-4 text-base text-primary uppercase cursor-pointer font-medium"
              onClick={toggle}
            >
              Leaflet Map
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-5 mb-16">
            <p
              className="p-4 text-base text-primary uppercase cursor-pointer font-medium"
              onClick={toggle}
            >
              Line Graph
            </p>
            <p className="p-4 text-base text-cyan uppercase ursor-pointer font-medium">
              Leaflet Map
            </p>
          </div>
        )}

        {!content ? (
          <div className="w-full">
            <ApexChart cases={cases} deaths={deaths} recovered={recovered} />
          </div>
        ) : (
          <>
            <LeafletMap />
          </>
        )}
      </div>
    </div>
  );
};

export default Charts;
