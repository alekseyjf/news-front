import React from "react";

import NewsModule from "desktop/module/front/oneNews"

const NewsId = (props) => {
  const getView = () => {
    return NewsModule.getView(props);
    // NewsModule.normalizeInitialProps()
  };

  return (
    <div>
      {getView()}
    </div>
  )
};

NewsId.getInitialProps = async (ctx, props) => {
  return NewsModule.getServerSideProps(ctx, props);
};

export default NewsId;
