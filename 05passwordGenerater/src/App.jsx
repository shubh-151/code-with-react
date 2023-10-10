import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [passoword, setPassoword] = useState();

  const passowordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMzxcvbnmlkjhgfdsaqwertyuiop";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&(){}[]?/><*+-_`~";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassoword(pass);
  }, [length, charAllowed, numberAllowed, setPassoword]);

  const passowordRef = useRef(null);

  useEffect(() => {
    passowordGenerator();
  }, [length, charAllowed, numberAllowed, passowordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passowordRef.current?.select()
    //passowordRef.current?.setSelectionRange(0,3)
    navigator.clipboard.writeText(passoword);
  }, [passoword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={passoword}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          ref={passowordRef}
          readOnly
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            max={100}
            min={6}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput"> Numbers </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput"> character </label>
        </div>
      </div>
    </div>
  );
}
export default App;
