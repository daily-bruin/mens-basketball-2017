// get the player data from sheet

var allPlayers = [];

class BasketballPlayer {
  constructor(name, ppg, apg, rpg, blurbs, link) {
    this.name = name;
    this.ppg = ppg;
    this.apg = apg;
    this.rpg = rpg;
    this.blurbs = blurbs;
    this.link = link;
  }
}

$.ajax({
  dataType: "json",
  url: "https://spreadsheets.google.com/feeds/list/13EkyoRA9tyoefEb1A7-f4vKd94CyK_FijxxkbkW6CgI/od6/public/values?alt=json"
}).done(function (data) {
  data = data.feed.entry;
  for (var player in data){
    allPlayers.append(new BasketballPlayer(player, ppg, apg, rpg, blurbs, link));
  }
});