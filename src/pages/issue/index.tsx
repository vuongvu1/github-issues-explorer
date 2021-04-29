import { FC } from "react";
import { connect } from "react-redux";
import {
  useIssueQuery,
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

const Issue: FC<Props> = ({ name, owner }) => {
  const filter = IssueState.Open;
  const orderBy = IssueOrderField.CreatedAt;
  const orderDir = OrderDirection.Desc;

  const { data, loading, error } = useIssueQuery({
    variables: {
      name: name || "reactjs.org",
      owner: owner || "reactjs",
      status: filter,
      orderBy,
      orderDir,
    },
  });

  const cleanData = data?.repository?.issues?.edges?.map(
    (edge) => edge?.node
  ) as IssueType[];

  const totalCount = data?.repository?.issues?.totalCount;

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

const mapStateToProps = ({ repoSlice }: RootState) => ({
  name: repoSlice.name,
  owner: repoSlice.owner,
});

export default connect(mapStateToProps)(Issue);
