let money = 0;
let slop = 0;
let workers =0;
let bosses =0;
let manegars =0;
let aidan = 0;
let popos1 =0;
let dave =0;


const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")
const button5 = document.querySelector("#button5")
const text1 = document.querySelector("#text1")
const moneyText= document.querySelector("#moneyText")
const slopText= document.querySelector("#slopText")
const workersText = document.querySelector("#workersText")
const bossText = document.querySelector("#bossText")
const managersText = document.querySelector("#managersText")
const button120 = document.querySelector("#button120")

//buttons

button1.onclick = shop;
button2.onclick = worked;
button3.onclick = hireWorker;
button4.onclick = hireBosses;
button5.onclick = managers;
button120.onclick = retireJoke;

function retireJoke(){
  text1.innerText ="just kidding. keep working"
  button120.style.display = 'none';
};

function factory(){
  button1.onclick = shop;
  button1.innerText = "Shop";
  button2.innerText = "Work";
  text1.innerText ="welcome to slop factory what do you want to do?"
  button2.onclick = worked;
  button3.innerText ="Hire workers"
  button3.onclick = hireWorker;
  button3.style.display ='inline-block';
  button4.innerText ="Hire boss"
  button4.onclick = hireBosses;
  button4.style.display ='inline-block';
  button5.innerText = "Managers";
  button5.style.display ="inline-block";
  button5.onclick = managers;
  button120.style.display ="inline-block"
};

function managers(){
  button1.onclick = factory;
  button1.innerText = "Go Back"

  button2.innerText = "Hire aidan (99k slops)"
  button2.onclick = aiden;
  button3.innerText = "Hire Popos (200k slops)"
  button3.onclick = popos;
  button4.innerText = "Hire dave the magical cheese wizard (1m slops)"
  button4.onclick = lastManager;
  button5.style.display ="none"

  text1.innerText = "Hire managers to auto buy workers and bosses! also you can only hire each manager once"
}

function aiden(){
  if (aidan == 0){
  if (slop >= 99000){
  slop -= 99000;
  manegars += 1;
  aidan += 1
  managersText.innerText = manegars;
  text1.innerText ="You got hired aidan now you get + 5 workers/bosses every 1 sec"
  } else {
    text1.innerText ="You dont have enough slops to buy aidan";
  }
  }
}

function automoneymakingworkers1() {
  setInterval(function() {
      // Assuming each worker generates 1 money per second
      workers += aidan;
      bosses += aidan;

      // Update the text elements with the updated values
      workersText.innerText = workers;
      bossText.innerText = bosses;
  }, 200); // Run the function every 200 milliseconds (0.2 seconds)
};

automoneymakingworkers1(); // Start the automatic money-making process

function popos(){
  if (popos1 == 0){
  if (slop >= 200000){
  slop -= 200000;
  manegars += 1;
  popos1 += 1
  managersText.innerText = manegars;
  text1.innerText ="You got hired Popos now you get + 25 workers/bosses every 1 sec"
  }  else {
    text1.innerText ="You dont have enough slops to buy Popos";
  }
  }
}

function automoneymakingworkers2() {
  setInterval(function() {
      // Assuming each worker generates 1 money per second
      workers += popos1;
      bosses += popos1;

      // Update the text elements with the updated values
      workersText.innerText = workers;
      bossText.innerText = bosses;
  }, 40); // Run the function every 10 milliseconds (0.01 seconds)
};

automoneymakingworkers2(); // Start the automatic money-making process

function lastManager(){
  if (dave == 0){
  if (slop >= 1000000){
  slop -= 1000000;
  manegars += 1;
  dave += 1
  managersText.innerText = manegars;
  text1.innerText ="You got hired dave now you get + 100 workers/bosses every 1 sec"
  } else {
    text1.innerText ="You dont have enough slops to buy dave";
  }
  }
}

function automoneymakingworkers3() {
  setInterval(function() {
    // Assuming each worker generates 1 money per second
    workers += dave;
    bosses += dave;

    // Update the text elements with the updated values
    workersText.innerText = workers;
    bossText.innerText = bosses;
  }, 10); // Run the function every 10 millisecond (100 times per second)
};

automoneymakingworkers3(); // Start the automatic money-making process


function shop() {
  
  button1.innerText = "Go back";
  button1.onclick = factory;
  button2.innerText ="Buy 2 slops (10$)"
  text1.innerText = "you enterd the shop what do you want to buy?"
  button2.onclick = buySlop;
  button3.innerText = "Buy 20 slops(100$)"
  button3.onclick = buy20Slops;
  button4.innerText = "Buy 200 Slops(1k$)"
  button4.onclick = buy200Slops;
  button5.innerText = "buy 2k slops (10k$)"
  button5.onclick = buy2kslops;;
  button120.style.display ="none"
};

function buySlop(){
  if (money >= 10){
    money = money - 10;
    slop = slop + 2;
    moneyText.innerText = money;
    slopText.innerText = slop;
  } else[
    text1.innerText ="you dont have enough Tachobuck to buy 2 slops!"
  ]
  };
  function buy20Slops(){
    if (money >= 100){
      money = money - 100;
      slop = slop + 20;
      moneyText.innerText = money;
      slopText.innerText = slop;
    } else[
      text1.innerText ="you dont have enough Tachobuck to buy 20 slops!"
    ]
    };

    function buy200Slops(){
      if (money >= 1000){
        money = money - 1000;
        slop = slop + 200;
        moneyText.innerText = money;
        slopText.innerText = slop;
      } else[
        text1.innerText ="you dont have enough Tachobuck to buy 200 slops!"
      ]
      };

      function buy2kslops(){
        if (money >= 10000){
          money = money - 10000;
          slop = slop + 2000;
          moneyText.innerText = money;
          slopText.innerText = slop;
        } else[
          text1.innerText ="you dont have enough Tachobuck to buy 2000 slops!"
        ]
        };

function hireWorker(){
button1.innerText ="Go back"
button1.onclick = factory;
button2.innerText ="Hire new worker(20 slops)"
button2.onclick = hired;
button3.innerText ="Hire 5 new workers (100 slops)"
button3.onclick = hiredFive;
button4.innerText = "Hire 20 new workers (400 slops)"
button4.onclick = hiredtwinty;
button5.innerText = "Hire 100 new workers (2k slops)"
button5.onclick = hired100;
text1.innerText ="Hire workers to get more money!"

};

function hired(){
  if (slop >= 20){
    slop = slop - 20;
    workers = workers + 1
    slopText.innerText = slop;
    workersText.innerText = workers;
    text1.innerText ="you got 1 worker ;D"
  } else[
      text1.innerText ="you dont have enough slops to buy a worker!"
    ]
  };

  function hiredFive(){
    if (slop >= 100){
      slop = slop - 100;
      workers = workers + 5
      slopText.innerText = slop;
      workersText.innerText = workers;
      text1.innerText ="you got 5 workers ;D"
    } else[
        text1.innerText ="you dont have enough slops to buy 5 worker!"
      ]
    };
  
  function hiredtwinty(){
    if (slop >= 400){
      slop = slop - 400;
      workers = workers + 20
      slopText.innerText = slop;
      workersText.innerText = workers;
      text1.innerText ="you got 20 workers ;D"
    } else[
        text1.innerText ="you dont have enough slops to buy 20 worker!"
      ]
    };

    function hired100(){
      if (slop >= 2000){
        slop = slop - 2000;
        workers = workers + 100;
        slopText.innerText = slop;
        workersText.innerText = workers;
        text1.innerText ="you got 100 workers ;D"
      } else[
          text1.innerText ="you dont have enough slops to buy 100 worker!"
        ]
      };


function hireBosses(){
button1.innerText ="Go back"
button1.onclick = factory;
button2.innerText = "Hire 1 boss (200 slops)"
button2.onclick = hired1boss;
button3.innerText = "Hire 5 bosses (1k slops)"
button3.onclick = hired5boss;
text1.innerText = "Hire bosses to get more slops!"
button4.innerText ="Hire 20 bosses (4k slops)"
button4.onclick = hired20boss;
button5.innerText = "Hire 200 bosses (40k slops)"
button5.onclick = hired200bosses;
};

function hired1boss(){
  if (slop >= 200) {
    slop -= 200
    bosses += 1
    bossText.innerText = bosses
    slopText.innerText = slop;
    text1.innerText ="you hired 1 boss"
  } else {
    text1.innerText ="you dont have enough slops to buy 1 boss"
  }
};

function hired5boss(){
  if (slop >= 1000) {
    slop -= 1000
    bosses += 5
    bossText.innerText = bosses;
    slopText.innerText = slop;
    text1.innerText ="you hired 5 bosses"
  } else {
    text1.innerText ="you dont have enough slops to buy 5 bosses"
  }
};

function hired20boss(){
  if (slop >= 4000) {
    slop -= 4000
    bosses += 20
    bossText.innerText = bosses;
    slopText.innerText = slop;
    text1.innerText ="you hired 20 bosses"
  } else {
    text1.innerText ="you dont have enough slops to buy 20 bosses"
  }
};

function hired200bosses(){
  if (slop >= 40000) {
    slop -= 40000
    bosses += 200
    bossText.innerText = bosses
    slopText.innerText = slop;
    text1.innerText ="you hired 200 bosses"
  } else {
    text1.innerText ="you dont have enough slops to buy 200 bosses"
  }
};

function automoneymakingslops (){
  setInterval(function() {
    slop += bosses; // Assuming each worker generates 1 money per second
    slopText.innerText = slop; // Update the money display
}, 200); // Run the function every 1000 milliseconds (1 second)
};

automoneymakingslops();

automoneymaking();

function automoneymaking (){
  setInterval(function() {
    money += workers; // Assuming each worker generates 1 money per second
    moneyText.innerText = money; // Update the money display
}, 1000); // Run the function every 1000 milliseconds (1 second)
};


function worked(){
  money = money + 1;
  text1.innerText = "you worked and got 1 Tachobuck"
  moneyText.innerText = money;
};

