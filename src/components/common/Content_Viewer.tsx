import React from "react";

type ContentViewerProps = {
    children: React.ReactNode;
};

const Content_Viewer: React.FC<ContentViewerProps> = ({ children }) => {
    return <div className="content_viewer">{children}</div>;
};

export default Content_Viewer;
