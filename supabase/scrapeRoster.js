// Given a URL and team number, scrape the roster and return a CSV of the data
import * as cheerio from 'cheerio';
const roster = [];

const scrapeRoster = async (url, teamNumber) => {
    const res = await fetch(url);
    const html = await res.text();
      const $ = cheerio.load(html);
      const rosterTable = $('#rosterTable');
      const rosterTableBody = rosterTable.children('tbody');
      const rosterTableRows = rosterTableBody.children('tr');
      rosterTableRows.each((i, el) => {
        const row = $(el);
        const jersey = row.children('td').eq(0).text();
        const name = row.children('td').eq(1).text();
        const positions = row.children('td').eq(2).text();
        const gradYear = row.children('td').eq(3).text();
        const height = row.children('td').eq(4).text();
        const m = height.match(/([3-7])\'([0-9]{1,2})\"/)
        const heightInInches = m ? parseInt(m[1]) * 12 + parseInt(m[2]) : 0;
        const varsity = false;
        const lastName = name.split(' ').pop().trim();
        const firstName = name.split(' ').slice(0, -1).join(' ').trim();
        const player = {
          team: teamNumber,
          jersey: isNaN(parseInt(jersey)) ? -1 : parseInt(jersey),
          firstName,
          lastName,
          positions: positions.split('/').filter((x) => x != ''),
          gradYear: parseInt(gradYear),
          height: heightInInches,
          varsity,
        };
        roster.push(player);
      });
};

await scrapeRoster('https://basdbobcats.com/main/teamroster/id/3618198/seasonId/4767887', 2);
await scrapeRoster('https://freedombulldogs.bigteams.com/main/teamroster/id/3603216/seasonId/4784253', 3);
await scrapeRoster('https://cvwarriors.net/main/teamroster/id/3632537/seasonId/4800331', 4);
await scrapeRoster('https://avonworthhsathletics.bigteams.com/main/teamroster/id/3643358/seasonId/4764953', 5);
//await scrapeRoster('', 6);,"Our Lady of the Sacred Heart",,
await scrapeRoster('https://montourathletics.org/main/teamroster/id/3676387/seasonId/4762120', 7);
//await scrapeRoster('', 8);,"New Brighton HS",,
//await scrapeRoster('', 9);,"Sto-Rox HS",,
await scrapeRoster('https://hopewell.bigteams.com/main/teamroster/id/3646587/seasonId/4741028', 10);

roster.forEach((player) => {
    const positionsCSV = player.positions.map(p => `""${p.trim()}""`).join(',');
    console.log(`${player.team},${player.jersey},"${player.firstName}","${player.lastName}","[${positionsCSV}]",${player.gradYear},${player.height},${player.varsity}`)
})
