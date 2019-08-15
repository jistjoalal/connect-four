/**
 * Connect Four - 4kyu
 * whoIsWinner(moves)
 * - Input: ["A_Red", "B_Yellow", ... ]
 * - Output: 'Red', 'Yellow', or 'Draw'
 * implementation:
 * - 7x6 grid
 * - iterate thru moves
 *   - insert into grid
 *     - translate move + grid state to new grid
 *   - check for connect-four
 *     - return Red/Yellow
 * - return Draw
 */

const run = moves => {
  const g = rng(7).map(_ => "");
  for (let move of moves) {
    insert(move, g);
    // console.log(g);
    const c = check(g);
    if (c) return c;
  }
  return "Draw";
};

const rng = n => [...Array(n).keys()];

const insert = (move, grid) => {
  const r = "ABCDEFG".indexOf(move[0]);
  grid[r] += move[2];
};

const check = g => {
  const all = [...g, ...cols(g), ...diags(g), ...diags(flip(g))];
  for (let row of all) {
    const r = checkRow(row);
    if (r) return r;
  }
  return false;
};

const checkRow = row =>
  /RRRR/.test(row) ? "Red" : /YYYY/.test(row) ? "Yellow" : false;

const cols = g => rng(6).map((_, i) => g.map((_, j) => g[j][i] || 0).join``);

const diags = g => {
  const lu = rng(3).map(i => rng(4 + i).map(o => g[3 + i - o][o] || 0).join``);
  const ru = rng(3).map(i => rng(6 - i).map(o => g[1 + i + o][o] || 0).join``);
  return [...lu, ...ru];
};

const flip = g => g.map(r => [...r.padEnd(6, 0)].reverse().join``);

module.exports = { run };
