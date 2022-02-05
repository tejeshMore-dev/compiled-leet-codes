const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const _ = require('lodash');
const fuzzy = require('fuzzy');
const Sort = require("./lib/MergeSort");
const Graph = require("./lib/Graph");

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

  const graph = new Graph();
  graph.addNode('A')
  graph.addNode('B')
  graph.addNode('C')
  graph.addNode('D')
  graph.addNode('E')

  graph.addEdge('A', 'B')
  graph.addEdge('A', 'E')

  graph.addEdge('B', 'E')

  graph.addEdge('C', 'A')
  graph.addEdge('C', 'B')
  graph.addEdge('C', 'D')

  graph.addEdge('D', 'E')

  graph.dfs('C')
  graph.dfs('A')

  graph.bfs('C')
  graph.bfs('A')





















  // problems = loadProblems();

  // inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

  // inquirer
  //   .prompt([{
  //     type: 'autocomplete',
  //     name: 'problemName',
  //     suggestOnly: true,
  //     message: 'Enter Problem Name?',
  //     searchText: 'We are searching Problem for you!',
  //     emptyText: 'Nothing found!',
  //     source: searchProblem,
  //     validate: function (val) {
  //       return val ? true : 'Type something!';
  //     },
  //   }])
  //   .then(function (answers) {
  //     let problem = require(__dirname + problemsPath + answers.problemName);
  //     problem.execute();
  //   });
}