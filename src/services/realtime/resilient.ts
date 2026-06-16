import { supabase } from '../../shared-supabase';

export const safeSubscribe = (channel:string, cb:any) => {
  const ch = supabase.channel(channel);

  ch.subscribe((status:any) => {
    if (status === 'SUBSCRIBED') {
      console.log('connected:', channel);
    }
    if (status === 'CLOSED') {
      console.log('reconnecting...');
      setTimeout(() => safeSubscribe(channel, cb), 2000);
    }
  });

  return ch;
};
