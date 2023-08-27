import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vquxmjbcpdyuoxhhziyv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxdXhtamJjcGR5dW94aGh6aXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4ODcxODQsImV4cCI6MjAwODQ2MzE4NH0.s5ZPNnHhV-G4vtJu0TmhfrMsXQtISrkSElcXeRAdZfI"
);

export const useSupabase = () => {
  const getTeamRoster = (team) => {
    return supabase
      .from("players")
      .select(
        `id, jersey, firstName, lastName, positions, gradYear, height, varsity, team(name, nickname, avatar_url)`
      )
      .eq("team", team)
      .order("lastName", { ascending: true });
  };

  const getPlayer = (id) => {
    return supabase
      .from("players")
      .select(
        `id, jersey, firstName, lastName, positions, gradYear, height, varsity, team(name, nickname, avatar_url)`
      )
      .eq("id", id)
      .single();
  };

  const getSchedule = () => {
    return supabase.from('schedule')
      .select(`time, visitor:visitor(id, name, nickname, avatar_url), home:home(id, name, nickname, avatar_url)`)
      .or('visitor.eq.1, home.eq.1')
      .order('time', { ascending: true })
  }
  

  return {
    supabase,

    getTeamRoster,
    getPlayer,
    getSchedule,
  };
};
