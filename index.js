// List of all CSS colors
const allColors = [
  "AliceBlue","AntiqueWhite","Aqua","Aquamarine",
  "Azure","Beige","Bisque","Black","BlanchedAlmond",
  "Blue","BlueViolet","Brown","BurlyWood","CadetBlue",
  "Chartreuse","Chocolate","Coral","CornflowerBlue",
  "Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan",
  "DarkGoldenRod","DarkGray","DarkGrey","DarkGreen",
  "DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
  "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen",
  "DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
  "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue",
  "DimGray","DimGrey","DodgerBlue","FireBrick",
  "FloralWhite","ForestGreen","Fuchsia","Gainsboro",
  "GhostWhite","Gold","GoldenRod","Gray","Grey","Green",
  "GreenYellow","HoneyDew","HotPink","IndianRed","Indigo",
  "Ivory","Khaki","Lavender","LavenderBlush","LawnGreen",
  "LemonChiffon","LightBlue","LightCoral","LightCyan",
  "LightGoldenRodYellow","LightGray","LightGrey","LightGreen",
  "LightPink","LightSalmon","LightSeaGreen","LightSkyBlue",
  "LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
  "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine",
  "MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen",
  "MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
  "MediumVioletRed","MidnightBlue","MintCream","MistyRose",
  "Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab",
  "Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
  "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff",
  "Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown",
  "RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
  "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray",
  "SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal",
  "Thistle","Tomato","Turquoise","Violet","Wheat","White",
  "WhiteSmoke","Yellow","YellowGreen"
];

 /**
  * Display all CSS colors
 */
function showAllColors() {
  allColors.map((color) => {
    const wrapper = document.getElementById('all_color_container');

    let el = document.createElement('div');
    el.className = 'colorbox';
    el.setAttribute('id', color);
    el.innerText = color;

    //Show all Colorbox
    let el2 = wrapper.appendChild(el);
    el2.style.backgroundColor = color;
    el2.addEventListener('click', function (event) {
      showMyColor(color);
    });
  });
}

/**
 * Updates the backgroundColor.
 * @param {string} myColor
 */
function showMyColor(myColor) {
  const wrapper = document.getElementById('color_container');
  wrapper.style.backgroundColor = myColor;
}

/**
 * Using API Gateway get the selected CSS name from DynamoDB
 */
function refresh() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://lhkggkck4k.execute-api.us-west-2.amazonaws.com/prod/", true);
  xhttp.send();
  xhttp.addEventListener("readystatechange", processRequest, false);

  function processRequest(e) {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var colorSelected = response.cssColor;
      if(colorSelected == 0) {
        showAllColors();
      } else {
        showMyColor(colorSelected);
      }
    }
  }
  setTimeout(refresh, 2000);
}

refresh();
