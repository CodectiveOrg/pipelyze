
import RadioComponent from "@/components/radioButton/radio/radio.component";
import styles from "./page.module.css";
import RadioGroupComponent from "@/components/radioButton/radioGroupe/radioGroup.component";


export default function Page() {
  return  (

    <RadioGroupComponent direction="row" >
      <RadioComponent placement="top" label="als;fj" color="info"/> 
      
      <RadioComponent placement="start" label="als;fj" color="info"/> 
      <RadioComponent placement="bottom" label="small" color="info" size="small"/> 
    </RadioGroupComponent>
  )
}
