"use client";

import { useRef, useState } from "react";

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);

  const [selectedOption, setSelectedOption] = useState<"normal" | "small">(
    "normal",
  );

  const radioChangeHandler = (e) => {
    console.log(e);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    console.log(formData.get("chiz"));
  };

  return (
    <form ref={formRef} onSubmit={formSubmitHandler}>
      <input
        type="radio"
        name="chiz"
        value="normal"
        checked={selectedOption === "normal"}
        onChange={() => setSelectedOption("normal")}
      />
      <input
        type="radio"
        name="chiz"
        value="small"
        checked={selectedOption === "small"}
        onChange={() => setSelectedOption("small")}
      />
      <button>Submit</button>
    </form>

    // <RadioGroupComponent direction="column">
    //   <RadioComponent
    //     label="normal"
    //     placement="top"
    //     color="primary"
    //     size="small"
    //     disabled
    //     value="normal"
    //   />
    //   <RadioComponent label="small" color="warning" />
    // </RadioGroupComponent>
  );
}
