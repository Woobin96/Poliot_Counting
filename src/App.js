import React, { useState } from "react";
import './App.css';
import { STRINGS } from "./string";

function App() {
  // Full TC
  const [count, setCount] = useState(0);
  const FullTcHandleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log(`Full TC 증가: ${newCount}`);
  };
  const FullTchandleIncrease2 = () => {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    console.log(`Full TC 감소: ${newCount}`);
  };

  // Result
  const [Resultcount, ResultsetCount] = useState(0);
  const ResultHandleIncrease = () => {
    const newCount = Resultcount + 1;
    ResultsetCount(newCount);
    console.log(`재현 확인 증가: ${newCount}`);
  };
  const ResultHandleIncrease2 = () => {
    const newCount = Resultcount > 0 ? Resultcount - 1 : 0;
    ResultsetCount(newCount);
    console.log(`재현 확인 감소: ${newCount}`);
  };

  // VOC
  const [VoCcount, VoCsetCount] = useState(0);
  const VoCHandleIncrease = () => {
    const newCount = VoCcount + 1;
    VoCsetCount(newCount);
    console.log(`VOC 증가: ${newCount}`);
  };
  const VoCHandleIncrease2 = () => {
    const newCount = VoCcount > 0 ? VoCcount - 1 : 0;
    VoCsetCount(newCount);
    console.log(`VOC 감소: ${newCount}`);
  };

  // TC Update
  const [TC_Updatecount, TC_UpdatesetCount] = useState(0);
  const TC_UpdateHandleIncrease = () => {
    const newCount = TC_Updatecount + 1;
    TC_UpdatesetCount(newCount);
    console.log(`TC Update 증가: ${newCount}`);
  };
  const TC_UpdateHandleIncrease2 = () => {
    const newCount = TC_Updatecount > 0 ? TC_Updatecount - 1 : 0;
    TC_UpdatesetCount(newCount);
    console.log(`TC Update 감소: ${newCount}`);
  };

  // Task
  const [Taskcount, TasksetCount] = useState(0);
  const TaskHandleIncrease = () => {
    const newCount = Taskcount + 1;
    TasksetCount(newCount);
    console.log(`Task 증가: ${newCount}`);
  };
  const TaskHandleIncrease2 = () => {
    const newCount = Taskcount > 0 ? Taskcount - 1 : 0;
    TasksetCount(newCount);
    console.log(`Task 감소: ${newCount}`);
  };

  // Reset
  const handleReset = () => {
    console.log("전체 초기화!");
    setCount(0);
    ResultsetCount(0);
    VoCsetCount(0);
    TC_UpdatesetCount(0);
    TasksetCount(0);
  };

  // 저장 버튼
  const handleSave = () => {
    const content =
      `Full TC: ${count}\n` +
      `Result: ${Resultcount}\n` +
      `VOC: ${VoCcount}\n` +
      `TC_Update: ${TC_Updatecount}`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = getTodayFileName();
    link.click();

    URL.revokeObjectURL(url); // 메모리 해제
  };


  return (
    <div className="App">
      <header>
        <h1 className='HEADER_TITLE'> {STRINGS.HEADER_TITLE} </h1>
      </header>

      <div className="App2">
        <div className="App3">
          <h3 style={{ marginRight: "1rem" }}>{STRINGS.FullTC}</h3>
          <button onClick={FullTcHandleIncrease} style={{ marginRight: "1rem" }}> + </button>
          <span style={{ marginRight: "1rem" }}>{count}</span>
          <button onClick={FullTchandleIncrease2} style={{ marginRight: "1rem" }}> - </button>
        </div>
      </div>

      <div className="App2">
        <div className="App3">
          <h3 style={{ marginRight: "1rem" }}>{STRINGS.TASK}</h3>
          <button onClick={TaskHandleIncrease} style={{ marginRight: "1rem" }}> + </button>
          <span style={{ marginRight: "1rem" }}>{Taskcount}</span>
          <button onClick={TaskHandleIncrease2} style={{ marginRight: "1rem" }}> - </button>
        </div>
      </div>

      <div className="App2">
        <div className="App3">
          <h3 style={{ marginRight: "1rem" }}>{STRINGS.Result}</h3>
          <button onClick={ResultHandleIncrease} style={{ marginRight: "1rem" }}> + </button>
          <span style={{ marginRight: "1rem" }}>{Resultcount}</span>
          <button onClick={ResultHandleIncrease2} style={{ marginRight: "1rem" }}> - </button>
        </div>
      </div>


      <div className="App2">
        <div className="App3">
          <h3 style={{ marginRight: "1rem" }}>{STRINGS.VOC}</h3>
          <button onClick={VoCHandleIncrease} style={{ marginRight: "1rem" }}> + </button>
          <span style={{ marginRight: "1rem" }}>{VoCcount}</span>
          <button onClick={VoCHandleIncrease2} style={{ marginRight: "1rem" }}> - </button>
        </div>
      </div>

      <div className="App2">
        <div className="App3">
          <h3 style={{ marginRight: "1rem" }}>{STRINGS.TC_Update}</h3>
          <button onClick={TC_UpdateHandleIncrease} style={{ marginRight: "1rem" }}> + </button>
          <span style={{ marginRight: "1rem" }}>{TC_Updatecount}</span>
          <button onClick={TC_UpdateHandleIncrease2} style={{ marginRight: "1rem" }}> - </button>
        </div>

        <button
          onClick={handleReset} style={{ marginTop: "16px" }}
        >{STRINGS.Reset}</button>

        <button
          onClick={handleSave} style={{ marginTop: "16px", marginLeft: '16px' }}
        >{STRINGS.Save}</button>

      </div>

      <div>
      </div>
      <div style={{
        margin: '32px',
      }}>
        <strong>만든이 : Mr.Kong</strong>
      </div>

    </div>

  );
}

function getTodayFileName() {
  const today = new Date(); // 오늘 날짜 가져오기

  const year = today.getFullYear();         // 연도 (예: 2025)
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 월 (0부터 시작이라 +1)
  const date = String(today.getDate()).padStart(2, '0');       // 일
  const hours = String(today.getHours()).padStart(2, '0');      // 시
  const minutes = String(today.getMinutes()).padStart(2, '0');  // 분
  const seconds = String(today.getSeconds()).padStart(2, '0');  // 초

  return `ToDay_Counting_${year}-${month}-${date}_${hours}-${minutes}-${seconds}.txt`;
  // return `ToDay_Counting_${year}-${month}-${date}.txt`;
}

export default App;
