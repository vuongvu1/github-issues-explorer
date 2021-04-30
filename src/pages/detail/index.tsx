import { FC } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useIssueDetailQuery } from "src/generated/graphql";
import { AuthorType, RootState } from "src/reducers/types";
import { Layout, DetailView } from "src/components";

type Props = {
  owner: string;
  name: string;
};

const Detail: FC<Props> = ({ owner, name }) => {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useIssueDetailQuery({
    variables: {
      owner,
      name,
      number: parseInt(id),
    },
  });

  console.log(data);
  const cleanData = data?.repository?.issue;

  return (
    <Layout title={`${owner} / ${name} - Issues #${id}`}>
      {cleanData && (
        <DetailView
          title={cleanData.title}
          author={cleanData.author as AuthorType}
          createdAt={cleanData.createdAt}
          status={cleanData.state}
          // body={cleanData?.body}
          // comments={cleanData?.comments}
        />
      )}
    </Layout>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = ({ repoSlice }: RootState) => ({
  owner: repoSlice.searchParams.owner,
  name: repoSlice.searchParams.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
