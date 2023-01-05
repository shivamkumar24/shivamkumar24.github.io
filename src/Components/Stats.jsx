import React from "react";

const Stats = () => {
  return (
    <div style={{ backgroundColor: "azure" }}>
      <div style={{ width: "40%", margin: "auto" }}>
        <a href="https://github.com/shivamkumar24">
          <img
            alt=""
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=shivamkumar24"
          />
        </a>
      </div>

      <div
        style={{
          width: "60%",
          padding: "15px",
          height: "auto",
          display: "flex",
          margin: "auto",
        }}
      >
        <a href="https://github.com/shivamkumar24">
          <img
            alt=""
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=shivamkumar24" //launguages
          />
        </a>
        <a href="https://github.com/shivamkumar24">
          <img
            alt=""
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=shivamkumar24&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
