import { useEffect, useState } from "react";
import "./App.css";
import { apiStore, getData } from "./fetures/slice/ApiSlice";
import { decrease, increase, reset, selectCount } from "./fetures/slice/CountSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hook";

function App() {
  const [num, setNum] = useState(0);
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const apidata = useAppSelector(apiStore);

  useEffect(()=>{
    dispatch(getData());
  },[])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
      className="App"
    >
      <h1>NORMAL Counter</h1>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
      <br />
      <button onClick={() => setNum(num - 1)}>--</button>
      <br />
      <hr style={{ backgroundColor: "red", height: "3px", width: "100%" }} />
      <hr />
      
      {/* ------------------------------------ */}

      <h1>STORE Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increase(10))}>+</button>
      <br />
      <button onClick={() => dispatch(decrease(5))}>--</button>
      <br />
      <button onClick={() => dispatch(reset())}>reset</button>
      <br />
      <hr style={{ backgroundColor: "red", height: "3px", width: "100%" }} />
      <hr />

      {/* ------------------------------------ */}

      {apidata.loading && <p>...loading</p>}
      {apidata.error && <p>{apidata.error}</p>} 

      {/* you can get your data here its working*/}

    </div>
  );
}

export default App;
