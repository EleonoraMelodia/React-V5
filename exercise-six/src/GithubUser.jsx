import useGitHubUser from "./useGitHubUser";

const GithubUser = ({ selectedUser }) => {
  const { data, error, fetchGithubUser } = useGitHubUser(selectedUser);

  return (
    <div>
      {error && <h2>Something went wrong</h2>}
      {data && <h2>{data.login}</h2>}
      {data && <h2>{data.name}</h2>}
      {data && <img src={data.avatar_url} alt="avatar github user"></img>}
   
    </div>
  );
};

export default GithubUser;
