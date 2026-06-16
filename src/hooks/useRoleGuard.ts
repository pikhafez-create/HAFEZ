import { useEffect } from 'react';
import { supabase, getUserRole } from '../../shared-supabase';

export const useRoleGuard = (navigation: any, allowed: string[]) => {
  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getUser();
      const role = await getUserRole(data.user?.id as string);

        navigation.replace('Login');
      }
    };

    check();
  }, []);
};
