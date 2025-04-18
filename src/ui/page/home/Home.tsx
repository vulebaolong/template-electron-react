import { Button } from "@mantine/core";
import { useState } from "react";
import rootRouter from "../../router/routes";
import reactLogo from "../../assets/react.svg";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { SET_COUNT } from "../../store/slices/setting/setting.slice";
import { ROUTER } from "../../constant/router.constant";

export default function Home() {
   const [count, setCount] = useState(0);
   const countRedux = useAppSelector((state) => state.setting.count);
   const dispatch = useAppDispatch();
   return (
      <>
         <div>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React + Anh Long1</h1>
         <Button
            onClick={() => {
               rootRouter.navigate(ROUTER.TEST);
            }}
         >
            Go Page Test
         </Button>
         <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            <button
               onClick={() => {
                  dispatch(SET_COUNT(countRedux + 1));
               }}
            >
               count redux is {countRedux}
            </button>
            <p>
               Edit <code>src/App.tsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </>
   );
}
