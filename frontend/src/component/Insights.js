import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
export default function BarChart(props) {
  const { detail } = props;
  const { ratingAverage,servicesCompleted,oneStarRatings,twoStarRatings,threeStarRatings,fourStarRatings,fiveStarRatings,totalEarning,rewardPoints } = detail;
  // console.log("The props are ", props.props.fiveStar);
  // var ratings=[props.props.fiveStar,props.props.fourStar,props.props.threeStar,props.props.twoStar,props.props.oneStar];
  var ratings = [oneStarRatings,twoStarRatings,threeStarRatings,fourStarRatings,fiveStarRatings];
  // console.log("The ratings are ", ratings);
  const data = {
    labels: ["5⭐", "4⭐", "3⭐", "2⭐", "1⭐"],

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
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "1%" }}>INSIGHTS</h1>
      <div className="money-earned">
        <h3 style={{ textAlign: "center" }}>Total Earnings</h3>
        <h1
          style={{
            fontSize: "5em",
            fontWeight: "bolder",
            fontFamily: "monospace",
          }}
        >
          ₹{totalEarning}
        </h1>
      </div>
      <div className="money-earned">
        <h3 style={{ textAlign: "center" }}>Services Completed</h3>
        <h1
          style={{
            fontSize: "5em",
            fontWeight: "bolder",
            fontFamily: "monospace",
          }}
        >
          {servicesCompleted}
        </h1>
      </div>
      <div className="money-earned">
        <h3 style={{ textAlign: "center" }}>Reward Points</h3>
        <h1
          style={{
            fontSize: "5em",
            fontWeight: "bolder",
            fontFamily: "monospace",
          }}
        >
        {rewardPoints}
          {/* average rating * 10 */}
        </h1>
      </div>
      <h2
        style={{ textAlign: "center",margin: "2%",marginTop:'5%', fontFamily: "monospace",fontWeight:'bold' }}
      >
        Rating Description
      </h2>
      <div
        style={{
          margin: "10%",
          marginTop: "0",
          textAlign: "center",
          outline: "solid",
          padding: "2%",
        }}
      >
        <Bar
  data={data}
  width={100}
  height={100}
  options={{
    scales: {
      y: {
        ticks: {
          font: {
            size: 25, // This changes the font size
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 25, // This changes the font size
          },
        },
        title: {
          display: true,
          text: 'Hunt for More Stars for exciting rewards', // Replace with your desired x-axis label
          font: {
            size: 25, // This changes the font size of the x-axis label
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Rating Chart', // Replace with your desired chart title
        font: {
          size: 30, // This changes the font size of the chart title
        },
      },
    },
  }}
/>

      </div>
    </div>
  );
}
