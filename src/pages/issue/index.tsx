import {
  useIssueQuery,
  IssueState,
  IssueOrderField,
  OrderDirection,
} from "src/generated/graphql";
import { DataTable, Layout } from "src/components";
import { IssueType } from "src/utils/types";

const Issue = () => {
  const filter = IssueState.Open;
  const orderBy = IssueOrderField.CreatedAt;
  const orderDir = OrderDirection.Desc;

  const { data, loading, error } = useIssueQuery({
    variables: {
      name: "reactjs.org",
      owner: "reactjs",
      status: filter,
      orderBy,
      orderDir,
    },
  });

  const cleanData = data?.repository?.issues?.edges?.map(
    (edge) => edge?.node
  ) as IssueType[];

  const totalCount = data?.repository?.issues?.totalCount;

  console.log(cleanData);

  return (
    <Layout title="reactjs / reactjs.org - Issues">
      <DataTable
        data={cleanData || []}
        filter={filter}
        loading={loading}
        totalCount={totalCount || 0}
        error={error?.message}
      />
    </Layout>
  );
};

export default Issue;
