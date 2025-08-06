import FileExplorerComponent from "@/components/file-explorer/file-explorer.component";

import { FILE_EXPLORE_MOCK_ITEMS } from "@/mock/file-explorer.mock";

export default function Page() {
  return <FileExplorerComponent items={FILE_EXPLORE_MOCK_ITEMS} />;
}
