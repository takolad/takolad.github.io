import React from "react";

const RepoContext = React.createContext({
  id: 0,
  name: "",
  repo_url: "",
  deploy_url: "",
  img: "",
  type: "",
  description: "",
});

export default RepoContext;
