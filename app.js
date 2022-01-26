const chars = ["0", "1"];
const timer = 100;
const endChar = `|`;

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
  const Char = new Array();
  for (let i = 0; i < process.stdout.rows - 1; i++) {
    Char.push(`${endChar}${getChar(process.stdout.columns - 4)}${endChar}\n`);
    allChar = "";
  }
  const thisAll = `${Char.join("")}`;
  return thisAll;
};

(() => {
  setInterval(() => {
    process.stdout.write("\x1Bc");
    process.stdout.write(`\u001b[32;40m${main()}`);
  }, timer);
  process.on("SIGINT", () => {
    process.stdout.write(`\u001b[0m`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`\u001b[31;107mhttps://github.com/hamidreza01`);
    process.stdout.write(`\u001b[0m\n`);
    process.exit(0);
  });
})();
