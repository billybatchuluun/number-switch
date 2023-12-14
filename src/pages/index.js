import Image from "next/image";
import { Inter } from "next/font/google";
import { Counter } from "@/components/Counter";
import { useState } from "react";
import { ButtonPlus } from "@/components/ButtonPlus";
import { ButtonMinus } from "@/components/ButtonMinus";
import { CountWindow } from "@/components/CountWindow";
import { Button } from "@/components/Button";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //let count=0;
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  }

  const [number, Setnumber] = useState(0);

  function TurnButton() {
    Setnumber(number + 1);
  }

  return (
    <div className="flex gap-4 justify-center mt-20">
      {/* <ButtonPlus /> */}
      <Button text="+" function={handlePlus} />
      <CountWindow count={count} />
      <Button text="-" function={handleMinus} />
      {/* <ButtonMinus /> */}
      <Button
        function={TurnButton}
        text={number % 2 == 1 ? "OFF" : "ON"}
        // if (number%2==1) {"off"} else {"on"}
        bg={number % 2 == 1 ? "bg-red-200" : "bg-green-200"}
      />
    </div>
  );
}
