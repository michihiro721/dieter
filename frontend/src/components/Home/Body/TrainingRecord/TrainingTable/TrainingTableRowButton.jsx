// このコードは、トレーニング記録の各行に表示されるボタンを管理するためのコンポーネントです。
// 完了ボタンと削除ボタンが含まれ、完了ボタンはタイマーの開始またはリセットを行います。

import React, { useState } from "react";
import AlertFunction from '../AlertFunction/AlertFunction';



const TrainingTableRowButton = ({ index, set, handleUpdateSet, handleRemoveSet }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  // 完了ボタンがクリックされたときの処理
  const handleCompleteClick = () => {
    if (set.complete) {
      // タイマーをリセットする
      setResetTimer(true);
      setShowAlert(false);
    } else {
      // タイマーを開始する
      setShowAlert(true);
      setResetTimer(false);
    }
    // セットの完了状態を更新する
    handleUpdateSet(index, "complete", !set.complete);
  };

  // タイマーが完了したときの処理
  const handleAlertComplete = () => {
    setShowAlert(false);
  };

  // タイマーの値を更新する関数
  const updateTimer = (newTime) => {
    const minutes = Math.floor(newTime / 60);
    const seconds = newTime % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    handleUpdateSet(index, "timer", formattedTime);
  };

  return (
    <>
      <button
        onClick={handleCompleteClick}
        className={set.complete ? "complete-button" : "incomplete-button"}
      >
        {set.complete ? "レ" : ""}
      </button>
      {showAlert && (
        <AlertFunction
          timer={parseInt(set.timer.split(':').reduce((acc, time) => (60 * acc) + +time))}
          onComplete={handleAlertComplete}
          updateTimer={updateTimer}
          reset={resetTimer}
        />
      )}
      <button
        onClick={() => handleRemoveSet(index)}
        className="delete-button"
      >
        削除
      </button>
    </>
  );
};

export default TrainingTableRowButton;