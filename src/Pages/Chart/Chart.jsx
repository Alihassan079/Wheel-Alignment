import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import "../Chart/Chart.css"

const Chart = () => {
  useEffect(() => {
    // Initialize the Highcharts chart after the component mounts
    Highcharts.chart('spline-chart', {
      chart: {
        type: 'spline',
        spacing: [10, 10, 15, 10],
      },
      title: {
        text: null,
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        lineWidth: 0,
        tickWidth: 0,
      },
      yAxis: {
        title: {
          text: null,
        },
        labels: {
          enabled: false,
        },
        gridLineWidth: 1,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      plotOptions: {
        spline: {
          marker: {
            enabled: false,
          },
        },
      },
      series: [
        {
          name: 'New Students',
          data: [10, 15, 17, 20, 35],
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <section>
      <div
        id="spline-chart"
        style={{ width: '100%', height: '400px' }} // Apply styles using React's style object
      ></div>
    </section>
  );
};

export default Chart;