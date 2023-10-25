import useGitHubUser from "./useGitHubUser";

const GithubUser = ({username}) => {
  const { data, error, fetchGithubUser, onRefetch, loading } = useGitHubUser(username);

  return (
    <div>
      <button onClick={onRefetch}> Reload </button>
      {error && <h2>Something went wrong</h2>}
      {loading && <h2> Loading... </h2>}
      {data && <h2>{data.login}</h2>}
      {data && <h3>{data.name}</h3>}
      {data && <img src={data.avatar_url} alt="avatar" ></img>}
    </div>
  );
};

export default GithubUser;
