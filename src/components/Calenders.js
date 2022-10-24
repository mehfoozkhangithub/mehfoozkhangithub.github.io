import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div >
    <h1 style={{color:"black", margin:"auto",textAlign:"center", fontFamily:"Arial, Helvetica, sans-serif ", padding:"10px",font_weight:"bold" , box_shadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>Calender</h1>
      <GitHubCalendar
        style={{ margin: "auto", marginBottom:"50px"}}
        username="mehfoozkhangithub"
        transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={20}
      >
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
    </div>
  );
};

export default Calender;