import useGitHubUser from "./useGitHubUser";

const GithubUser = ({ selectedUser }) => {
  const { data, error, fetchGithubUser, loading } = useGitHubUser(selectedUser);

  return (
    <div>
      {error && <h2>Something went wrong</h2>}
      {loading && <h2> Loading... </h2>}
      {data && <h2>{data.login}</h2>}
      {data && <h3>{data.name}</h3>}
      {data && <img src={data.avatar_url} alt="user avatar"></img>}
    </div>
  );
};

export default GithubUser;
