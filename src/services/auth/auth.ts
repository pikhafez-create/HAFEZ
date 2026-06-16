import { supabase } from '../../../shared-supabase';

export const login = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

export const logout = async () => {
  await supabase.auth.signOut();
};
