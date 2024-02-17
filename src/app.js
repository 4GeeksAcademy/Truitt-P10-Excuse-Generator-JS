/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let generateExcuse = () => {

  let who = ["the dog" , "My grandma" , "My turtle" , "My bird"];

  let action = ["ate" , "peed" , "crushed" , "broke"];

  let what = ["my homework" , "the keys" , "my car"];

  let when = ["before the class" , "right on time" , "when i finished" , "during my lunch" , "while I was praying"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  console.log("Hello Rigo from the console!");
};
