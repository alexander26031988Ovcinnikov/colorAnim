function animateColor(element, colors, duration) {
    const timePerFrame = 1000 / 60; 
let frames = Math.round(duration / timePerFrame);
    const styles = getComputedStyle(element);

let arr = Object.entries(colors);

for (let i of arr) {
let currentValue = styles[i[0]];
let parseCurrentValue = parseRGB(currentValue);
  let red = parseCurrentValue[0];
let green = parseCurrentValue[1];
let blue = parseCurrentValue[2];

  const styleValue = parseHex(i[1]); 
  const redSwitch = styleValue[0] - red;
  const greenSwitch = styleValue[1] - green;
  const blueSwitch = styleValue[2] - blue;
  const redStep = redSwitch / frames;
  const greenStep = greenSwitch / frames;
  const blueStep = blueSwitch / frames;

const intervalId = setInterval(() => {
frames--;

if (!frames) {
  clearInterval(intervalId);
}

red += redStep;
green += greenStep;
blue += blueStep;

let colorsArr = [red, green, blue];

colorValue = toRGB(colorsArr);

element.style[i[0]] = colorValue;
}, timePerFrame);
}
}

  const box = document.getElementById('box');

animateColor(box, {backgroundColor: '#fff', color: '#000'}, 3000);

function parseRGB(color) {
return color
.slice(4, -1)
.split(',')
.map(n => parseInt(n, 10));
}

function parseHex(color) {
let colorsRGB; 

if (color.length == 7) { 
color = color.slice(1);
  const red = color.slice(0, 2);
  const green = color.slice(2, 4);
  const blue = color.slice(4, 6);

return colorsRGB = [red, green, blue].
                 map(n => parseInt(n, 16));
                 
} else if (color.length == 4) {
    color = color.slice(1);
    color += color;
    const red = color.slice(0, 2);
    const green = color.slice(2, 4);
    const blue = color.slice(4, 6);

return colorsRGB = [red, green, blue].
          map(n => parseInt(n, 16));
}

return colorsRGB; 
}

function toRGB(color) {
return `rgb(
    ${Math.round(color[0])},
    ${Math.round(color[1])}, 
    ${Math.round(color[2])})`;
}

