import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
export default function BarChart(props) {
  // console.log("The props are ", props.props.fiveStar);
  var ratings=[props.props.fiveStar,props.props.fourStar,props.props.threeStar,props.props.twoStar,props.props.oneStar];
  // console.log("The ratings are ", ratings);
  const data = {
    labels: ["5⭐","4⭐","3⭐","2⭐","1⭐"],
   
    datasets: [
      {
        label: "Number of Ratings",
        data: ratings,
        backgroundColor: [
          "#0A2647",
          "#144272",
          "#205295",
          "#2C74B3",
          "#BAD7E9",
        ],
        borderColor: [
          "#A47E3B",
          "#A47E3B",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 3,
      },
    ],
  };
  return (
    <div style={{ width: 650, textAlign: "center" }}>
      <h1 style={{ fontFamily: "monospace" }}>
        Rating Description
      </h1>
      <Bar data={data} width={50} height={50} options= {
    {scales: {
        y: {
            ticks: {
                font: {
                    size: 25//this change the font size
                }
            }
        },
        x: {
            ticks: {
                font: {
                    size: 25 //this change the font size
                }
            }
        }
    },
    
    }
}    />
    </div>
  );
}