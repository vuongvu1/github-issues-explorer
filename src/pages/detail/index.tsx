import { FC } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useIssueDetailQuery, useUserQuery } from "src/generated/graphql";
import { AuthorType, RootState, CommentType } from "src/reducers/types";
import { Layout, DetailView } from "src/components";

type Props = {
  owner: string;
  name: string;
};

const Detail: FC<Props> = ({ owner, name }) => {
  const { id } = useParams<{ id: string }>();

  const { data: userData } = useUserQuery();
  const { data, loading, error } = useIssueDetailQuery({
    variables: {
      owner,
      name,
      number: parseInt(id),
    },
  });

  const cleanData = data?.repository?.issue;
  const comments = cleanData?.comments?.edges?.map(
    (edge) => edge?.node
  ) as CommentType[];

  return (
    <Layout title={`${owner} / ${name} - Issues #${id}`}>
      <DetailView
        title={cleanData?.title || ""}
        author={cleanData?.author as AuthorType}
        createdAt={cleanData?.createdAt}
        status={cleanData?.state || ""}
        body={cleanData?.body || ""}
        comments={comments}
        loading={loading}
        error={!cleanData ? error?.message : undefined}
        currentUserAvatar={userData?.viewer?.avatarUrl}
      />
    </Layout>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = ({ repoSlice }: RootState) => ({
  owner: repoSlice.searchParams.owner,
  name: repoSlice.searchParams.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
