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
    <div style={{background:"rgb(5,4,2)",color:"white",padding:"5rem"}} >
    <h1 style={{color:"white", margin:"auto",textAlign:"center", fontFamily:"Arial, Helvetica, sans-serif ", padding:"13px",font_weight:"bold" ,  background:"rgb(5,4,2)", fontSize:"2rem"}}>Github-Calender</h1>
      <GitHubCalendar
        style={{ margin: "auto"}}
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