import React from "react";
import styled from "styled-components";
// import "../App.css";
const Stats = () => {
  return (
    // streak
    <div style={{ background: "rgb(28,29,36)", padding: "8rem" }}>
      <div style={{ height: "17rem" }}>
        <h1
          style={{
            color: "white",
            margin: "auto",
            textAlign: "center",
            padding: "13px",
            background: "rgb(28,29,36)",
            fontSize: "2rem",
            padding: "2rem",
          }}
          className="section-title"
        >
          Github-Statics
        </h1>
        {/*   <div style={{ width: "40%", margin: "auto"}}>
        <a href="https://github.com/mehfoozkhangithub">
         <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=mehfoozkhangithub"
           />
        </a>
       </div> */}

        <div
          style={{
            width: "51%",
            height: "190px",
            display: "flex",
            flexDirection: "row",
            margin: "auto",
            gap: "4px",
            box_shadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            background: "rgb(28,29,36)",
          }}
        >
          <a href="https://github.com/mehfoozkhangithub">
            <img
              align="center"
              width={"80%"}
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=mehfoozkhangithub" //languages
            />
          </a>
          <a href="https://github.com/mehfoozkhangithub">
            <img
              align="left"
              src="https://github-readme-stats.vercel.app/api?username=mehfoozkhangithub&count_private=true&show_icons=true" //stats
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
