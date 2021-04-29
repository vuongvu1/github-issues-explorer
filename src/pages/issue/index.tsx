import { useIssueQuery, IssueState } from "src/generated/graphql";
import { DataTable, Layout } from "src/components";
import { IssueType } from "src/utils/types";

const Error = () => {
  const { data, loading, error } = useIssueQuery({
    variables: {
      name: "reactjs.org",
      owner: "reactjs",
      status: IssueState.Open,
    },
  });

  const cleanData = data?.repository?.issues?.edges?.map(
    (edge) => edge?.node
  ) as IssueType;

  console.log(cleanData);
  console.log({ error });

  return (
    <Layout title="reactjs / reactjs.org - Issues">
      <DataTable
        data={cleanData || []}
        filter={IssueState.Open}
        loading={loading}
      />
    </Layout>
  );
};

export default Error;
