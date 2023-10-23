import { useState, useEffect } from "react";

const useGitHubUser = (username) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUser() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (response.ok) {
        const userData = await response.json();
        setData(userData);
        setError(null);
      } else {
        setError("An error occurred in the server call");
      }
    } catch (error) {
      setError("An error occurred in your code", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUser()
  }, []);

  return {
    data,
    error,
    fetchGithubUser,
    loading,
  };
};

export default useGitHubUser;
