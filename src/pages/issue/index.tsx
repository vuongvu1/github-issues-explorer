import { FC } from "react";
import { connect } from "react-redux";
import {
  useIssueQuery,
  useIssueCountQuery,
  IssueState,
  IssueOrderField,
  OrderDirection,
} from "src/generated/graphql";
import { RootState } from "src/reducers";
import { DataTable, Layout } from "src/components";
import { IssueType } from "src/utils/types";

type Props = {
  name?: string;
  owner?: string;
};

const Issue: FC<Props> = ({ name = "reactjs.org", owner = "reactjs" }) => {
  const filter = IssueState.Closed;
  const orderBy = IssueOrderField.CreatedAt;
  const orderDir = OrderDirection.Desc;

  const { data: countData } = useIssueCountQuery({
    variables: { name, owner },
  });

  const { data: issueData, loading, error } = useIssueQuery({
    variables: {
      name: name || "reactjs.org",
      owner: owner || "reactjs",
      status: filter,
      orderBy,
      orderDir,
    },
  });

  const cleanData = issueData?.repository?.issues?.edges?.map(
    (edge) => edge?.node
  ) as IssueType[];
  const issueCount = issueData?.repository?.issues?.totalCount;
  const totalCount = countData?.repository?.issues?.totalCount;

  return (
    <Layout title="reactjs / reactjs.org - Issues">
      <DataTable
        data={cleanData || []}
        filter={filter}
        loading={loading}
        issueCount={issueCount || 0}
        totalCount={totalCount || 0}
        error={!issueCount ? error?.message : undefined}
      />
    </Layout>
  );
};

const mapStateToProps = ({ repoSlice }: RootState) => ({
  name: repoSlice.name,
  owner: repoSlice.owner,
});

export default connect(mapStateToProps)(Issue);
