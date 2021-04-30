import { FC } from "react";
import { Spinner } from "src/assets/icons";
import SC from "./styles";

interface Props {
  isLoading?: boolean;
}

const LoadingOverlay: FC<Props> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <SC.LoadingOverlay>
      <Spinner width="48" height="48" />
    </SC.LoadingOverlay>
  );
};

export default LoadingOverlay;
