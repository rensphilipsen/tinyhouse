import { Fragment } from "react";
import { Skeleton } from "antd";

export const PageSkeleton = () => {
  const SkeletonParagraph = (
    <Skeleton
      active
      paragraph={{ rows: 4 }}
      className="page-skeleton__paragraph"
    />
  );

  return (
    <Fragment>
      {SkeletonParagraph}
      {SkeletonParagraph}
      {SkeletonParagraph}
    </Fragment>
  );
};
