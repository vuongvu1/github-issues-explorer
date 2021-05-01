import { IssueState } from "src/generated/graphql";
import { IssueType } from "src/reducers/types";
import Pagination from "../Pagination";
import Table from "./Table";
import SC from "./styles";

interface Props {
  data: IssueType[];
  filter: IssueState;
  setFilter: (filter: IssueState) => void;
  loading?: boolean;
  issueCount?: number;
  totalCount?: number;
  error?: string;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  goNextPage: () => void;
  goPreviousPage: () => void;
  currentPage: number;
}

const DataTable: React.FC<Props> = ({
  filter,
  setFilter,
  data,
  loading,
  issueCount,
  totalCount,
  error,
  hasNextPage,
  hasPreviousPage,
  goNextPage,
  goPreviousPage,
  currentPage,
}) => {
  return (
    <SC.Container>
      <Table
        issues={data}
        filter={filter}
        setFilter={setFilter}
        loading={loading}
        issueCount={issueCount}
        totalCount={totalCount}
        error={error}
      />
      <Pagination
        current={currentPage}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        onClickPrevious={goPreviousPage}
        onClickNext={goNextPage}
      />
    </SC.Container>
  );
};

export default DataTable;
