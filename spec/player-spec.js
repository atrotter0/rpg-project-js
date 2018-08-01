import { Player } from './../src/player.js';

describe('Player', function() {

  it('should test whether a Player has properties after instantiation', function() {
    const player1 = new Player("Kevin");
    expect(player1.name).toEqual("Kevin");
    expect(player1.level).toEqual(1);
    expect(player1.exp).toEqual(0);
    expect(player1.expToNextLevel).toEqual(100);
    expect(player1.stats.instinct).toEqual(1);
    expect(player1.stats.connectivity).toEqual(1);
    expect(player1.stats.might).toEqual(1);
    expect(player1.stats.stamina).toEqual(1);
    expect(player1.items.length).toEqual(undefined);
    expect(player1.ahnCoin).toEqual(0);
  });
});
