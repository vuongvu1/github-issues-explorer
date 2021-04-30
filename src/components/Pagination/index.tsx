import React from "react";
import SC from "./styles";

interface Props {
  current: number;
  hasPreviousPage?: boolean;
  onClickPrevious: () => void;
  hasNextPage?: boolean;
  onClickNext: () => void;
}

const Pagination: React.FC<Props> = ({
  current,
  hasPreviousPage,
  onClickPrevious,
  hasNextPage,
  onClickNext,
}) => {
  return (
    <SC.Container>
      <div>
        <SC.Button
          isDisabled={!hasPreviousPage}
          onClick={hasPreviousPage ? onClickPrevious : undefined}
        >
          Previous
        </SC.Button>
        {hasPreviousPage && (
          <SC.Button onClick={onClickPrevious}>{current - 1}</SC.Button>
        )}
        <SC.Button isActive>{current}</SC.Button>
        {hasNextPage && (
          <SC.Button onClick={onClickNext}>{current + 1}</SC.Button>
        )}
        <SC.Button
          isDisabled={!hasNextPage}
          onClick={hasNextPage ? onClickNext : undefined}
        >
          Next
        </SC.Button>
      </div>
    </SC.Container>
  );
};

export default Pagination;
