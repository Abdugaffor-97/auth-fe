import React, { useCallback, useEffect, useState } from "react";
import backend from "../../clients/axios";
import { useHistory } from "react-router-dom";
const useAuth = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = useCallback(async () => {
    try {
      const { data } = await backend.get("/users/me");
      setUser(data);
      setLoading(false);
    } catch (e) {
      if (
        e.response.status === 400 ||
        e.response.status === 401 ||
        e.response.status === 403
      ) {
        history.push("/auth/login");
        setLoading(false);
      }
    }
  }, [setUser, setLoading]);

  return [user, loading, fetchUser];
};

export default useAuth;
