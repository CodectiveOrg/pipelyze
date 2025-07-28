import { ReactNode } from "react";

import TableComponent from "../table/table.component";
import { FavoriteIcon } from "./components/favorite/favorite.icon";
import data from "./data.json";

import styles from "./file-manager.module.css";

export default function FileManagerComponent(): ReactNode {
  return (
    <div className={styles["file-manager"]}>
      <TableComponent>
        <TableComponent.Header>
          <th>Checkbox</th>
          <th>Name</th>
          <th>Size</th>
          <th>Type</th>
          <th>Modified</th>
          <th>Shared</th>
          <th></th>
        </TableComponent.Header>

        <TableComponent.Body>
          {data.map((item, index) => (
            <RowFile key={item.id} rowData={item} index={index} />
          ))}
        </TableComponent.Body>
      </TableComponent>
    </div>
  );
}

type RowFileProps = {
  id: number;
  name: string;
  size: string;
  type: string;
  modified: string;
  shared: object[];
};

function RowFile({
  rowData,
}: {
  rowData: RowFileProps;
  index: number;
}): ReactNode {
  const { id, name, size, type, modified } = rowData;
  return (
    <TableComponent.Row>
      <td>{id}</td>
      <td>{name}</td>
      <td>{size}</td>
      <td>{type}</td>
      <td>{modified}</td>
      <td>Shared</td>
      <td className={styles.actions}>
        <FavoriteIcon />
      </td>
    </TableComponent.Row>
  );
}
