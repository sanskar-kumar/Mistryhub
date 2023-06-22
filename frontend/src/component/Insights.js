import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";

export default function BarChart({ workerDetails }) {
  if (!workerDetails) {
    // If workerDetails is not available yet, you can show a loading indicator or return null
    return <div>Loading...</div>;
  }

  const ratings = [
    { star: "5⭐", count: workerDetails.fiveStarRatings },
    { star: "4⭐", count: workerDetails.fourStarRatings },
    { star: "3⭐", count: workerDetails.threeStarRatings },
    { star: "2⭐", count: workerDetails.twoStarRatings },
    { star: "1⭐", count: workerDetails.oneStarRatings },
  ];

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
          ₹{workerDetails.totalEarning}
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
          {workerDetails.servicesCompleted}
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
          {workerDetails.rewardPoints}
          {/* average rating * 10 */}
        </h1>
      </div>
      <h2
        style={{
          textAlign: "center",
          margin: "2%",
          marginTop: "5%",
          fontFamily: "monospace",
          fontWeight: "bold",
        }}
      >
        Rating Description
      </h2>
      <div
        style={{
          margin: "10%",
          marginTop: "0",
          textAlign: "center",
          outline: "solid",
          padding: "1%",
        }}
      >
        <VictoryChart
          domainPadding={20}
          height={400}
          width={600}
          // animate={{ duration: 50 }}
        >
          <VictoryLabel
            text="Rating Chart"
            x={300}
            y={30}
            textAnchor="middle"
            style={{
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              axisLabel: { padding: 20, fontSize: 15 },
              tickLabels: { fontSize: 20 },
            }}
          />
          <VictoryAxis
            tickFormat={ratings.map((data) => data.star)}
            style={{
              tickLabels: { fontSize: 20 },
            }}
          />
          <VictoryBar
            data={ratings}
            x="star"
            y="count"
            style={{
              data: {
                fill: "#0A2647",
                stroke: "#A47E3B",
                strokeWidth: 3,
              },
            }}
          />
        </VictoryChart>
      </div>
    </div>
  );
}
