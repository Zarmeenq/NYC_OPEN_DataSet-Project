let data, info;

async function init(){   
  let link = "arrest.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let arrest = data[i];
    build += `<div class="fitted card">
                <h1>${arrest.ofns_desc }</h1>
                <h3>${arrest.arrest_key}</h3>
                <hr>
                <p>${arrest.perp_sex}</p>
                <p>${arrest.perp_race} </p>
                <p>${arrest.age_group}</p>
                <hr>
                <p>${arrest.law_code}</p>
              </div>` ;   
  }
  output.innerHTML = build;
}

function filterByGenderRace(){
  let output = document.getElementById("output");
  let g = document.getElementById("gender").value;
  let r = document.getElementById("race").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let arrest = data[i];
    if(arrest.perp_sex == g && arrest.perp_race == r){
      build += `<div class="fitted card">
                <h1>${arrest.ofns_desc}</h1>
                <h3>${arrest.arrest_key}</h3>
                <hr>
                <p>${arrest.perp_sex}</p>
                <p>${arrest.perp_race} </p>
                <p>${arrest.age_group}</p>
                <hr>
                <p>${arrest.law_code}</p>
              </div>` ; 
      ct += 1;        
    }
  }
  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build; 
}
/*
function searchByAge(){
    let age = document.getElementById("age").value;
    let result = document.getElementById("result");
  
    let build = "";
    let ct = 0;

    for(let i = 0; i < data.length; i+=1){
    let arrest = data[i];
    if(arrest.perp_sex == g && arrest.perp_race == r){
      build += `<div class="fitted card">
                <h1>${arrest.ofns_desc}</h1>
                <h3>${arrest.arrest_key}</h3>
                <hr>
                <p>${arrest.perp_sex}</p>
                <p>${arrest.perp_race} </p>
                <p>${arrest.age_group}</p>
                <hr>
                <p>${arrest.law_code}</p>
              </div>` ; 
      ct += 1;        
    }
  }
  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build; 
}
    */





//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
//global variables
let data, info, output;

async function init(){
  let link = "mvc.json"; //https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=200";
  info = await fetch(link);
  data = await info.json();
  console.log(data); 
}




function arrestByRace() {

  let b = 0, wh = 0, bh = 0, ap = 0, w = 0;

  for (let i = 0; i < data.length; i++) {
    let arrest = data[i];

    if (arrest.perp_race == "BLACK") {
      b++;
    } else if (arrest.perp_race == "WHITE HISPANIC") {
      wh++;
    } else if (arrest.perp_race == "BLACK HISPANIC") {
      bh++;
    } else if (arrest.perp_race == "ASIAN / PACIFIC ISLANDER") {
      ap++;
    } else if (arrest.perp_race == "WHITE") {
      w++;
    }
  }

  let chartData = [
    ["BLACK", b],
    ["WHITE HISPANIC", wh],
    ["BLACK HISPANIC", bh],
    ["ASIAN / PACIFIC ISLANDER", ap],
    ["WHITE", w]
  ];

  let chartType = document.getElementById("chartType").value;

  displayChart(chartData, "chart", chartType);
}


function arrestByAgeGroup() {

  let a = 0, b = 0, c = 0, d = 0, e = 0;

  for (let i = 0; i < data.length; i++) {
    let arrest = data[i];

    if (arrest.age_group == "<18") {
      a++;
    } else if (arrest.age_group == "18-24") {
      b++;
    } else if (arrest.age_group == "25-44") {
      c++;
    } else if (arrest.age_group == "45-64") {
      d++;
    } else if (arrest.age_group && arrest.age_group != "(null)") {
      e++;
    }
  }

  let chartData2 = [
    ["<18", a],
    ["18-24", b],
    ["25-44", c],
    ["45-64", d],
    ["Other", e]
  ];

  let chartType = document.getElementById("chartType").value;

  displayChart(chartData2, "chart", chartType);
}