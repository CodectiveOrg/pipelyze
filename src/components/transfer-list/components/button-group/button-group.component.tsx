import { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";
import IconComponent from "@/components/icon/icon.component";

type Action = () => void;

type Props = {
  items: {
    left: readonly string[];
    right: readonly string[];
    leftChecked: string[];
    rightChecked: string[];
  };
  actions: {
    handleAllRight: Action;
    handleCheckedRight: Action;
    handleCheckedLeft: Action;
    handleAllLeft: Action;
  };
};

export default function ButtonGroupComponent({
  items,
  actions,
}: Props): ReactNode {
  const buttonsProperty = [
    {
      iconName: "arrows-right-line",
      clickHandler: actions.handleAllRight,
      disabled: items.left.length === 0,
    },
    {
      iconName: "right-line",
      clickHandler: actions.handleCheckedRight,
      disabled: items.leftChecked.length === 0,
    },
    {
      iconName: "left-line",
      clickHandler: actions.handleCheckedLeft,
      disabled: items.rightChecked.length === 0,
    },
    {
      iconName: "arrows-left-line",
      clickHandler: actions.handleAllLeft,
      disabled: items.right.length === 0,
    },
  ];

  return (
    <>
      {buttonsProperty.map((item, index) => (
        <ButtonComponent
          key={index}
          color="inherit"
          variant="outlined"
          onClick={item.clickHandler}
          disabled={item.disabled}
        >
          <IconComponent name={item.iconName} />
        </ButtonComponent>
      ))}
    </>
  );
}
