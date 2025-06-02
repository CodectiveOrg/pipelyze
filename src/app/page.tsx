"use client";

import { FormEvent, useRef } from "react";

import RadioComponent from "@/components/radio/radio.component";

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);

  // const [selectedOption, setSelectedOption] = useState<"normal" | "small">(
  //   "normal",
  // );

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    console.log(formData.get("fruit"));
  };

  return (
    <form ref={formRef} onSubmit={formSubmitHandler}>
      <RadioComponent name="fruit" value="apple" label="Apple" />
      <RadioComponent name="fruit" value="orange" label="Orange" />
      <RadioComponent name="fruit" value="banana" label="Banana" />

      <button>Submit</button>
    </form>

    //   <input
    //     type="radio"
    //     name="chiz"
    //     value="normal"
    //     checked={selectedOption === "normal"}
    //     onChange={() => setSelectedOption("normal")}
    //   />
    //   <input
    //     type="radio"
    //     name="chiz"
    //     value="small"
    //     checked={selectedOption === "small"}
    //     onChange={() => setSelectedOption("small")}
    //   />

    // <RadioGroupComponent direction="column">
    //
    // </RadioGroupComponent>
  );
}
