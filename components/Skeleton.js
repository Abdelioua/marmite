import React from "react";

const Skeleton = () => {
  return (
    <div className="skeleton container w-auto text-center flex flex-col gap-4">
      <div className="s-banner w-full h-32 bg-yellow-200"></div>
      <div className="content w-1/3 h-8 bg-yellow-200"></div>
      <div className="method flex flex-col gap-2">
        <p className="w-2/5 h-8 bg-yellow-200"></p>
        <p className="w-2/4 h-8 bg-yellow-200"></p>
        <p className="w-2/3 h-8 bg-yellow-200"></p>
      </div>
    </div>
  );
};

export default Skeleton;
