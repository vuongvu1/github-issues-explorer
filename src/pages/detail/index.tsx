import { FC, useCallback, useMemo } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useIssueDetailQuery,
  useUserQuery,
  useAddCommentMutation,
  IssueDetailDocument,
} from "src/generated/graphql";
import { AuthorType, RootState, CommentType } from "src/reducers/types";
import { Layout, DetailView } from "src/components";

type Props = {
  owner: string;
  name: string;
};

const Detail: FC<Props> = ({ owner, name }) => {
  const { id: issueNumber } = useParams<{ id: string }>();
  const issueDetailQueryVariables = useMemo(
    () => ({
      owner,
      name,
      number: parseInt(issueNumber),
    }),
    [owner, name, issueNumber]
  );

  const { data: userData } = useUserQuery();
  const { data, loading, error } = useIssueDetailQuery({
    variables: issueDetailQueryVariables,
  });
  const [addComment, { loading: isCommenting }] = useAddCommentMutation();

  const cleanData = data?.repository?.issue;
  const comments = cleanData?.comments?.edges?.map(
    (edge) => edge?.node
  ) as CommentType[];
  const issueId = cleanData?.id;

  const handleAddComment = useCallback(
    async (commentBody) => {
      if (commentBody && issueId) {
        await addComment({
          variables: { issueId, body: commentBody },
          refetchQueries: [
            {
              query: IssueDetailDocument,
              variables: issueDetailQueryVariables,
            },
          ],
        });
      }
    },
    [issueDetailQueryVariables, issueId, addComment]
  );

  return (
    <Layout title={`${owner} / ${name} - Issues #${issueNumber}`}>
      <DetailView
        title={cleanData?.title || ""}
        author={cleanData?.author as AuthorType}
        createdAt={cleanData?.createdAt}
        status={cleanData?.state || ""}
        body={cleanData?.body || ""}
        comments={comments}
        isCommenting={isCommenting}
        handleAddComment={handleAddComment}
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
