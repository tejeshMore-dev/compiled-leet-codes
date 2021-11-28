const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const _ = require('lodash');
const fuzzy = require('fuzzy');

const problemsPath = "/problems/leetcode/";
var problems = [];

boot();

function loadProblems() {
  return fs.readdirSync(__dirname + problemsPath);
}

function searchProblem(answers, input) {
  input = input || '';
  return new Promise(function (resolve) {
    setTimeout(function () {
      var fuzzyResult = fuzzy.filter(input, problems);
      resolve(
        fuzzyResult.map(function (el) {
          return el.original;
        })
      );
    }, _.random(30, 500));
  });
}

function boot() {
  console.log('************************************');
  console.log('*                                  *');
  console.log('*            App Started           *');
  console.log('*                                  *');
  console.log('************************************');

  problems = loadProblems();

  inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

  inquirer
    .prompt([{
      type: 'autocomplete',
      name: 'problemName',
      suggestOnly: true,
      message: 'Enter Problem Name?',
      searchText: 'We are searching Problem for you!',
      emptyText: 'Nothing found!',
      source: searchProblem,
      validate: function (val) {
        return val ? true : 'Type something!';
      },
    }])
    .then(function (answers) {
      let problem = require(__dirname + problemsPath + answers.problemName);
      problem.execute();
    });
}