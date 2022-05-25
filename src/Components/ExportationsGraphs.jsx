import { React, useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const API = import.meta.env.VITE_API;
const requestURL = `${API}/api/region/exportations`;
const line_series = {
  options: {
    chart: {
      height: 350,
      type: "line",
    },

    colors: ["#008FFB"],
    title: {
      text: "HeatMap Chart (Single color)",
    },
    xaxis: {},
  },
};

const bar_h_series = {
  options: {
    chart: {
      id: "basic-bar",
      type: "bar",
      width: "100%",
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {},
  },
};

export default function ExportationsGraphs() {
  const [graph1, setGraph1] = useState({});
  const [graph2, setGraph2] = useState({});

  useEffect(() => {
    axios.get(requestURL).then((res) => {
      console.log(res.data.data);
      setGraph1(res.data.data.graph1);
      setGraph2(res.data.data.graph2);
      //   setGraph1({ data: res.data.data.graph1 });
    });
  }, []);

  return <div>{graph1 && <div className="text-white text-2xl">HOLA</div>}</div>;
}
