import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(); //값을 적으면 수정이 안됨
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);

  const onChangeNum1 = (e) => {
    setNum1(e.target.value);
  };
  const onChangeNum2 = (e) => {
    setNum2(e.target.value);
  };

  const checkNum = (n1, n2) => {
    if (n1 === "" || n2 === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (isNaN(n1) || isNaN(n2)) {
      alert("숫자를 입력해주세요.");
      return;
    }
  };

  const onClickAdd = () => {
    // setResult(num1 + num2); 그냥 이렇게 하면 문자열로 더해짐 3+3=33
    checkNum(num1, num2);
    setResult(parseInt(num1) + parseInt(num2));
  };
  const onClickSubtract = () => {
    if (num1 === "" || num2 === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (isNaN(num1) || isNaN(num2)) {
      alert("숫자를 입력해주세요.");
      return;
    }
    setResult(parseInt(num1) - parseInt(num2));
  };
  const onClickMultiply = () => {
    if (num1 === "" || num2 === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (isNaN(num1) || isNaN(num2)) {
      alert("숫자를 입력해주세요.");
      return;
    }
    setResult(parseInt(num1) * parseInt(num2));
  };
  const onClickDivide = () => {
    if (num1 === "" || num2 === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (isNaN(num1) || isNaN(num2)) {
      alert("숫자를 입력해주세요.");
      return;
    }
    setResult(parseInt(parseInt(num1) / parseInt(num2))); //결과값까지 소수점 버리기
  };

  return (
    <div className="bg-green-200 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Calculator</h1>
      <div className="text-3xl font-black mb-4">{result}</div>
      <div className="mb-4">
        <input
          className="border-2 focus:outline-none focus:border-green-600 rounded-lg px-4 py-2 text-xl"
          type="text"
          value={num1}
          onChange={onChangeNum1}
        />
        <input
          className="border-2 focus:outline-none focus:border-green-600 rounded-lg px-4 py-2 text-xl ml-4"
          type="text"
          value={num2}
          onChange={onChangeNum2}
        />
      </div>
      <div>
        <button
          onClick={onClickAdd}
          className="border-2 px-2 py-1 rounded-lg border-red-500 text-red-500"
        >
          Add
        </button>
        <button
          onClick={onClickSubtract}
          className="border-2 px-2 py-1 rounded-lg border-blue-500 text-blue-500 ml-4"
        >
          Subtract
        </button>
        <button
          onClick={onClickMultiply}
          className="border-2 px-2 py-1 rounded-lg border-yellow-500 text-yellow-500 ml-4"
        >
          Multiply
        </button>
        <button
          onClick={onClickDivide}
          className="border-2 px-2 py-1 rounded-lg border-green-500 text-green-500 ml-4"
        >
          Divide
        </button>
      </div>
    </div>
  );
}

export default App;
