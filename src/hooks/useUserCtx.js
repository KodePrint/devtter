import { useContext } from "react";
import { UserCtx } from "context/UserContext";
import { authSessionUser } from '../supabase/client';

export const useUserCtx = () => {
  return useContext(UserCtx);
}
