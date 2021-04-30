import SC from "./styles";

interface Props {}

const DetailView: React.FC<Props> = () => {
  return (
    <>
      <SC.BackButton to="/">Go Back</SC.BackButton>
      <SC.Container>hello</SC.Container>
    </>
  );
};

export default DetailView;
