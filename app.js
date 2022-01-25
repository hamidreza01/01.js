const chars = ["0", "1"];

let allChar = new String();

const random = (min, max) => {
  return Math.floor(min + Math.random() * (max - min));
};

const getChar = (num) => {
  for (let i = 0; i < num; i++) {
    allChar += chars[random(0, chars.length)];
  }
  return allChar;
};

const main = () => {
  const firstChar = `______________________________________________________________________________________________________\n`;
  const twoChar = new Array();
  for (let i = 0; i < process.stdout.rows - 1; i++) {
    twoChar.push(`|${getChar(process.stdout.columns - 4)}|\n`);
    allChar = "";
  }
  const thisAll = `${twoChar.join("")}`;
  return thisAll;
};

(() => {
  setInterval(() => {
    process.stdout.write("\x1Bc");
    process.stdout.write(`\u001b[32;40m${main()}`);
  }, 100);
  process.on("SIGINT", () => {
    process.stdout.write(`\u001b[0m`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`\u001b[31;107mhttps://github.com/hamidreza01`);
    process.stdout.write(`\u001b[0m`);
    process.stdout.write(`\n`);
    process.exit(0);
  });
})();
