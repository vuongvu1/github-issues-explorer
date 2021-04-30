import { FC } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "src/reducers";
import { Layout, DetailView } from "src/components";

type Props = {
  owner?: string;
  name?: string;
};

const Detail: FC<Props> = ({ owner, name }) => {
  const { id } = useParams<{ id: string }>();
  return (
    <Layout title={`${owner} / ${name} - Issues #${id}`}>
      <DetailView />
    </Layout>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = ({ repoSlice }: RootState) => ({
  owner: repoSlice.searchParams.owner,
  name: repoSlice.searchParams.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
