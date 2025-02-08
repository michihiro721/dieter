import React, { useState, useEffect } from "react";
import './styles/CalculatorModal.css';

// CalculatorModalコンポーネントは、電卓のボタンを表示します。
// handleCalculatorClickプロパティは、ボタンがクリックされたときに呼び出される関数です。
// handleBackspaceプロパティは、バックスペースボタンがクリックされたときに呼び出される関数です。
const CalculatorModal = ({ isOpen, onClose, onSave }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isOpen) {
      setValue(""); // モーダルが開かれるたびに入力値をリセット
    }
  }, [isOpen]);

  const handleCalculatorClick = (num) => {
    setValue(value + num);
  };

  const handleBackspace = () => {
    setValue(value.slice(0, -1));
  };

  const handleClear = () => {
    setValue("");
  };

  const handleSave = () => {
    onSave(value);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="body-info-calculator-modal-overlay" onClick={onClose}>
      <div className="body-info-calculator-modal" onClick={(e) => e.stopPropagation()}>
        <div className="body-info-calculator-display fixed-size">{value}</div>
        <div className="body-info-calculator-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              className="body-info-calculator-button"
              onClick={() => handleCalculatorClick(num.toString())}
            >
              {num}
            </button>
          ))}
          <button className="body-info-calculator-button" onClick={() => handleCalculatorClick(".")}>.</button>
          <button className="body-info-calculator-button" onClick={handleBackspace}>&larr;</button>
          <button className="body-info-calculator-preservation-button" onClick={handleSave}>保存</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorModal;