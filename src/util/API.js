/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getReadMe: function (repo) {
    return new Promise((resolve, reject) => {
      // repo is an array of strings (repo name)
      const repos = repo;
      const owner = "takolad";
      const requests = repos.map((repo, idx) => {
        return axios.get(
          `https://api.github.com/repos/${owner}/${repo.name}/readme`
        );
      });
      axios
        .all(requests)
        .then(
          axios.spread(function (...res) {
            const mapped = res.map((readme) => {
              return {
                html_url: readme.data.html_url,
              };
            });
            resolve(mapped);
          })
        )
        .catch((err) => console.log(err));
    });
  },
};
