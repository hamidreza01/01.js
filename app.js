const chars = ["0", "1"];
const timer = 100;
const endChar = `|`;

// you can change color

const colors = {
  green: `\u001b[32;40m`,
  red: `\u001b[31;40m`,
  yellow: `\u001b[33;40m`,
  purple: `\u001b[35;40m`,
  blue: `\u001b[34;40m`,
  white: `\u001b[10;40m`,
};
const color = colors.green;
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
    process.stdout.write(`${color}${main()}`);
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
