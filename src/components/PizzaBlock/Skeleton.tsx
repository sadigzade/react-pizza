import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="420" rx="12" ry="12" width="91" height="45" />
    <rect x="128" y="420" rx="12" ry="12" width="152" height="45" />
    <rect x="0" y="312" rx="12" ry="12" width="280" height="88" />
    <rect x="0" y="265" rx="12" ry="12" width="280" height="27" />
    <circle cx="140" cy="130" r="120" />
    <rect x="124" y="184" rx="0" ry="0" width="14" height="31" />
  </ContentLoader>
);

export default Skeleton;
