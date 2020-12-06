const theme = new Theme();
theme.install(document.body);
theme.start();

const dlb = '<br><br>';

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

let el = document.createElement('h1');

function update() {
  let str = '';
  // today
  const d = new Date();
  str += `it's currently ${days[d.getDay()]}, ${
    months[d.getMonth()]
  } ${d.getDate()}, ${d.getFullYear()}<br>${d.getHours()}:${d.getMinutes()}.${d.getSeconds()}`;

  // christmas
  const x = new Date(d.getFullYear(), 11, 25);
  str += dlb;
  str += `xmas is ${days[x.getDay()]}, ${
    months[x.getMonth()]
  } ${x.getDate()}, ${x.getFullYear()}`;

  // distance
  str += dlb;
  str += `you have ${x.getDate() - d.getDate()} days`;

  el.innerHTML = str;
}

setInterval(update, 1000);

document.getElementById('app').appendChild(el);
