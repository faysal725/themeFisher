import React from 'react';
import './ChartNew.css'
import ReactDOM from "react-dom";
import Chart from "react-google-charts";




const ChartNew = () => {


        return (
            <div className="d-flex justify-content-center align-items-center chart__cell">
            <Chart 
              width={"500px"}
              height={"300px"}
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Duration", "Type-1", "Type-2", "Type-3", "Type-4"],
                ["Week-1", 20, 38, 30, 40],
                ["Week-2", 10, 10, 20, 30],
                ["Week-3", 30, 32, 30, 20],
                ["Week-4", 20, 34, 12, 10],
                ["Week-5", 20, 34, 12, 10],
                ["Week-6", 20, 34, 12, 10],
                ["Week-7", 20, 34, 12, 10]
              ]}
              options={{
                title: "New Visitor Last Week",
                chartArea: { width: "50%" },
                isStacked: true,
                backgroundColor: '#0C5F79',
                vAxis: {
                  title: "",
                  gridlines: { color: "#C5D0DE" },
                  textPosition: "none"
                },
                bars: "vertical",
                colors: ["#FFBD2F", "#117FA1", "red", "white"]
              }}
              // For tests
              rootProps={{ "data-testid": "3" }}
            />
          </div>
        );
    
};

export default ChartNew;