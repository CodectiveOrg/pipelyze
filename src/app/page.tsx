import RadioComponent from "@/components/radioButton/radio/radio.component";
import RadioGroupComponent from "@/components/radioButton/radioGroupe/radioGroup.component";



export default function Page() {
  return (
    <RadioGroupComponent direction="column">
      <RadioComponent
        label="normal"
        placement="top"
        color="primary"
        size="small"
        disabled
      />
      <RadioComponent label="small" color="warning" />
    </RadioGroupComponent>
  );
}
