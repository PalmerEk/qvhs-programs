import teamData from "~/data/teams.json";
import scheduleData from "~/data/schedule.json";
import playerData from "~/data/players.json";

export const useData = () => {
  const schedule = computed(() => {
    return scheduleData.map((game) => {
      const home = getTeam(game.home);
      const visitor = getTeam(game.visitor);

      return {
        ...game,
        home,
        visitor,
      };
    });
  });

  const todaysGame = computed(() => {
    const today = new Date();
    // const today = new Date("2023-08-29T18:00:00.000Z");
    const todaysGame = schedule.value.find((game) => {
      const gameDate = new Date(game.time);
      return (
        gameDate.getFullYear() === today.getFullYear() &&
        gameDate.getMonth() === today.getMonth() &&
        gameDate.getDate() === today.getDate()
      );
    });

    return todaysGame ? todaysGame : null;
  });

  const getTeam = (id) => {
    return teamData.find((team) => team.id == id);
  };

  const getTeamRoster = (id) => {
    return playerData.filter((player) => player.team == id);
  };

  const getPlayer = (id) => {
    return playerData.find((player) => player.id == id);
  };

  return {
    teamData,
    scheduleData,
    playerData,

    // methods
    getPlayer,
    getTeam,
    getTeamRoster,

    // computed
    schedule,
    todaysGame,
  };
};
