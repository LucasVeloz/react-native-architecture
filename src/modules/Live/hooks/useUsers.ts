import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { api } from "../../../services/api";
import handler from "../../../services/handleApiRequest";


interface Props {
  avatar_url: string;
  login: string;
}


export const useUsers = () => {
  const [users, setUsers] = useState([] as Props[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await handler(() => api.get('users'));
      if (!result.success) return;
      setIsLoading(false);
      setUsers(result.data);
    })()
  }, [])

  return { users, isLoading };
}


export const useUsersQuery = () => {
  return useQuery<AxiosResponse<Props[]>>('users', () => api.get('users'));
}
