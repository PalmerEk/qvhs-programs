<script setup>
const { getTeamRoster, getTeam } = useData();

// get QV roster
const team = getTeamRoster(1);

const gameTotals = () => {
    const gameStats = {}
    for (let j = 0; j < playersWithStats.value.length; j++) {
        const p = playersWithStats.value[j];

        for (let i = 0; i < p.stats.length; i++) {
            if(!gameStats[p.stats[i].game]) gameStats[p.stats[i].game] = { kills: 0, digs: 0, assists: 0, aces: 0 };
            gameStats[p.stats[i].game].kills += p.stats[i].kills;
            gameStats[p.stats[i].game].digs += p.stats[i].digs;
            gameStats[p.stats[i].game].assists += p.stats[i].assists;
            gameStats[p.stats[i].game].aces += p.stats[i].aces;
        }
    };

    return gameStats;
};

const playerTotals = (p) => {
  const m = { kills: 0, digs: 0, assists: 0, aces: 0 };
  for (let i = 0; i < p.stats.length; i++) {
    m.kills += p.stats[i].kills;
    m.digs += p.stats[i].digs;
    m.assists += p.stats[i].assists;
    m.aces += p.stats[i].aces;
  }
  return m;
};

const playersWithStats = computed(() => {
  return team.filter((p) => p.stats);
});

const overall = computed(() => {
  return playersWithStats.value.reduce(
    (m, p) => {
      const pt = playerTotals(p);
      m.kills += pt.kills;
      m.digs += pt.digs;
      m.assists += pt.assists;
      m.aces += pt.aces;
      return m;
    },
    { kills: 0, digs: 0, assists: 0, aces: 0 }
  );
});
</script>

<template>
  <div class="mx-4">
    <h1
      class="text-3xl text-center bg-accent text-black font-bold mb-4 rounded-md grid-col-2"
    >
      Total
    </h1>

    <div class="grid grid-2">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Kills</div>
          <div class="stat-value">{{ overall.kills.toLocaleString() }}</div>
        </div>

        <div class="stat">
          <div class="stat-title">Digs</div>
          <div class="stat-value">{{ overall.digs.toLocaleString() }}</div>
        </div>
      </div>

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Assists</div>
          <div class="stat-value">{{ overall.assists.toLocaleString() }}</div>
        </div>

        <div class="stat">
          <div class="stat-title">Aces</div>
          <div class="stat-value">{{ overall.aces.toLocaleString() }}</div>
        </div>
      </div>
    </div>

    <h1
      class="text-3xl text-center bg-accent text-black font-bold mb-4 rounded-md grid-col-2"
    >
      Player Totals
    </h1>
    <table class="table table-xs table-pin-rows table-pin-cols">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <td>Kills</td>
          <td>Digs</td>
          <td>Assists</td>
          <td>Aces</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in playersWithStats" :key="player.id">
          <th>{{ player.jersey >= 0 ? player.jersey : "" }}</th>
          <td>{{ player.lastName }}, {{ player.firstName }}</td>
          <td>{{ playerTotals(player).kills.toLocaleString() }}</td>
          <td>{{ playerTotals(player).digs.toLocaleString() }}</td>
          <td>{{ playerTotals(player).assists.toLocaleString() }}</td>
          <td>{{ playerTotals(player).aces.toLocaleString() }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <td>Total</td>
          <td>{{ overall.kills.toLocaleString() }}</td>
          <td>{{ overall.digs.toLocaleString() }}</td>
          <td>{{ overall.assists.toLocaleString() }}</td>
          <td>{{ overall.aces.toLocaleString() }}</td>
        </tr>
      </tfoot>
    </table>

    <h1
      class="text-3xl text-center bg-accent text-black font-bold mb-4 rounded-md grid-col-2"
    >
      Game Totals
    </h1>
    <table class="table table-xs table-pin-rows table-pin-cols">
      <thead>
        <tr>
          <th>#</th>
          <th>Opponent</th>
          <td>Kills</td>
          <td>Digs</td>
          <td>Assists</td>
          <td>Aces</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="[team, stats] in Object.entries(gameTotals())" :key="team">
          <th>{{ team }}</th>
          <td>{{ getTeam(team).name }}</td>
          <td>{{ stats.kills.toLocaleString() }}</td>
          <td>{{ stats.digs.toLocaleString() }}</td>
          <td>{{ stats.assists.toLocaleString() }}</td>
          <td>{{ stats.aces.toLocaleString() }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <td>Total</td>
          <td>{{ overall.kills.toLocaleString() }}</td>
          <td>{{ overall.digs.toLocaleString() }}</td>
          <td>{{ overall.assists.toLocaleString() }}</td>
          <td>{{ overall.aces.toLocaleString() }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped></style>
