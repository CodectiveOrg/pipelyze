import { ReactElement } from "react";

import FavoriteIcon from "@/components/file-manager/components/icons/favorite/favorite.icon";
import { GetDataDto } from "@/components/types/get-data-dto";

type Props = {
  items: GetDataDto[];
  className?: string;
};

export default function TableRowComponent({
  items,
  className,
}: Props): ReactElement {
  return (
    <>
      {items.map((item) => {
        const { id, name, size, type, modified } = item;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{size}</td>
            <td>{type}</td>
            <td>{modified}</td>
            <td>Shared</td>
            <td className={className}>
              <FavoriteIcon />
            </td>
          </tr>
        );
      })}
    </>
  );
}
