import { FC } from "react";
import { connect } from "react-redux";
import {
  useIssueQuery,
  useIssueCountQuery,
  IssueState,
} from "src/generated/graphql";
import { RootState, IssueType, SearchParamsType } from "src/reducers/types";
import {
  setFilter as setFilterAction,
  setCursor as setCursorAction,
} from "src/reducers/repoSlice";
import { DataTable, Layout } from "src/components";

type Props = {
  setFilter: (filter: IssueState) => void;
  setCursor: ({ before, after }: { before?: string; after?: string }) => void;
  searchParams: SearchParamsType;
};

const Issue: FC<Props> = ({ setFilter, setCursor, searchParams }) => {
  const { data: countData } = useIssueCountQuery({
    variables: { name: searchParams.name, owner: searchParams.owner },
  });

  const { data: issueData, loading, error } = useIssueQuery({
    variables: searchParams,
  });

  const totalCount = countData?.repository?.issues?.totalCount;
  const issueCount = issueData?.repository?.issues?.totalCount;
  const cleanData = issueData?.repository?.issues?.edges?.map(
    (edge) => edge?.node
  ) as IssueType[];
  const { endCursor, hasNextPage, hasPreviousPage, startCursor } =
    issueData?.repository?.issues?.pageInfo || {};

  const goNextPage = () => setCursor({ after: endCursor || undefined });
  const goPreviousPage = () => setCursor({ before: startCursor || undefined });

  return (
    <Layout title={`${searchParams.owner} / ${searchParams.name} - Issues`}>
      <DataTable
        data={cleanData || []}
        filter={searchParams.status}
        setFilter={setFilter}
        loading={loading}
        issueCount={issueCount}
        totalCount={totalCount}
        error={!issueCount ? error?.message : undefined}
        hasNextPage={hasNextPage}
        goNextPage={goNextPage}
        hasPreviousPage={hasPreviousPage}
        goPreviousPage={goPreviousPage}
      />
    </Layout>
  );
};

const mapDispatchToProps = {
  setFilter: setFilterAction,
  setCursor: setCursorAction,
};

const mapStateToProps = ({ repoSlice }: RootState) => ({
  searchParams: repoSlice.searchParams,
});

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
