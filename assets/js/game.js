//Get user input for robots name

var playerName = window.prompt("What is your Robot Warriors name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Having the console display the name , health and attack
window.alert("Your robots name is: " + playerName +  "." + " Your health is: " + playerHealth + "." + " Your attack damage is: " + playerAttack + ".");
console.log("Your robots name is: " + playerName +  "." + " Your health is: " + playerHealth + "." + " Your attack damage is: " + playerAttack + ".");

//Enemy Robot Data
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//Having the console display the Enemy name , health and attack
console.log("Your opponents name is: " + enemyName + "." + " Their health is: " + enemyHealth + "." + " Their attack damage is: "
+ enemyAttack + ".");

//Creating the Initial fight function
var fight = function(){
//Alert the user they are going to be starting the round
  window.alert("Lets get ready to robot rumble!");
  console.log("Lets get ready to robot rumble!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");
  console.log(playerName + " has chosen to " + promptFight);

  //Prompt fight LOOP
if (promptFight === "fight" || promptFight === "FIGHT"){

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

//check enemy health value to see if they can continue
window.alert(playerName + " attacked " + enemyName + " with " + playerAttack + " damage. " + enemyName + " now has " + enemyHealth + " health remaining.");
console.log(playerName + " attacked " + enemyName + " with " + playerAttack + " damage. " + enemyName + " now has " + enemyHealth + " health remaining.");

// check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
} 
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(enemyName + " attacked " + playerName + " with " + enemyAttack + " damage. " + playerName + " now has " + playerHealth + " health remaining.");

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth <= 0) {
  window.alert(playerName + " is deaded buddy. YOU LOSE!");
} 
else {
window.alert(playerName + " still has " + playerHealth + " health left!");
}
} else if (promptFight === "skip" || promptFight === "SKIP") {
  //confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to be a pussy?");

  //if yes (true)
  if (confirmSkip) {
    //alert them they are skipping
    window.alert(playerName + "is being a pussy and chose to skip the fight!");
    console.log(playerName + "is being a pussy and chose to skip the fight!");
    //deduct 2 for skipping
    playerMoney = playerMoney - 2;
    console.log(playerName + " has lost 2 coins for skipping." + playerName + " now has " + playerMoney + " left.");
  } 
  //if no (false), ask question again by running fight() again
  else {
    fight();
  }
  
} else {
  window.alert("You need to choose a valid option. 'FIGHT' or 'SKIP'. Try again!");
}
}

//Execute the function
fight();