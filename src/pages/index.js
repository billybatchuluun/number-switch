import Image from "next/image";
import { Inter } from "next/font/google";
import { Counter } from "@/components/Counter";
import { useState } from "react";
import { ButtonPlus } from "@/components/ButtonPlus";
import { ButtonMinus } from "@/components/ButtonMinus";
import { CountWindow } from "@/components/CountWindow";

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
  return (
    <div className="flex gap-4 justify-center mt-20">
      <ButtonPlus />
      <CountWindow />
      <ButtonMinus />
    </div>
  );
}
