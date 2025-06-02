"use client";

import { FormEvent, useRef } from "react";

import RadioGroupComponent from "@/components/radio-group/radio-group.component";

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
      <RadioGroupComponent
        name="fruit"
        items={[
          { value: "apple", label: "Apple" },
          { value: "orange", label: "Orange" },
          { value: "banana", label: "Banana" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
      <RadioGroupComponent
        name="size"
        items={[
          { value: "small", label: "Small", size: "small" },
          { value: "normal", label: "Normal" },
        ]}
      />
      <button>Submit</button>
    </form>
  );
}
