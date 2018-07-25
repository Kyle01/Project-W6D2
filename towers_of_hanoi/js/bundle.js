/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Game {\n  constructor() {\n    this.towers = [[3, 2, 1], [], []];\n  }\n\n  isValidMove(startTowerIdx, endTowerIdx) {\n      const startTower = this.towers[startTowerIdx];\n      const endTower = this.towers[endTowerIdx];\n\n      if (startTower.length === 0) {\n        return false;\n      } else if (endTower.length == 0) {\n        return true;\n      } else {\n        const topStartDisc = startTower[startTower.length - 1];\n        const topEndDisc = endTower[endTower.length - 1];\n        return topStartDisc < topEndDisc;\n      }\n  }\n\n  isWon() {\n      // move all the discs to the last or second tower\n      return (this.towers[2].length == 3) || (this.towers[1].length == 3);\n  }\n\n  move(startTowerIdx, endTowerIdx) {\n      if (this.isValidMove(startTowerIdx, endTowerIdx)) {\n        this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());\n        return true;\n      } else {\n        return false;\n      }\n  }\n\n  print() {\n      console.log(JSON.stringify(this.towers));\n  }\n\n  promptMove(reader, callback) {\n      this.print();\n      reader.question(\"Enter a starting tower: \", start => {\n        const startTowerIdx = parseInt(start);\n        reader.question(\"Enter an ending tower: \", end => {\n          const endTowerIdx = parseInt(end);\n          callback(startTowerIdx, endTowerIdx);\n        });\n      });\n  }\n\n  run(reader, gameCompletionCallback) {\n      this.promptMove(reader, (startTowerIdx, endTowerIdx) => {\n        if (!this.move(startTowerIdx, endTowerIdx)) {\n          console.log(\"Invalid move!\");\n        }\n\n        if (!this.isWon()) {\n          // Continue to play!\n          this.run(reader, gameCompletionCallback);\n        } else {\n          this.print();\n          console.log(\"You win!\");\n          gameCompletionCallback();\n        }\n      });\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/hanoi_view.js":
/*!**************************!*\
  !*** ./js/hanoi_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class HanoiView{\n  constructor(game, $el) {\n    this.game = game;\n    this.view = $el;\n    this.startTower = null;\n    this.endTower = null;\n    this.setupTowers();\n    this.render();\n    this.bindEvents();\n    \n  }\n  \n  bindEvents() {\n    $(\".tower\").on(\"click\", e =>{\n      const $tower = $(e.target);\n      $tower.attr(\"id\", \"clicked\");\n      if(!this.startTower){\n        this.startTower = $tower.data(\"towerNum\");\n      } else {\n        this.endTower = $tower.data(\"towerNum\");\n        this.makeMove();\n      }\n    });\n  }\n  \n  makeMove() {\n    console.log(this.startTower, this.endTower);\n    this.game.move(this.startTower, this.endTower);\n    this.startTower = null;\n    this.endTower = null;\n    this.render();\n  }\n  \n  setupTowers() {\n    // $(this.view).append(\"<ul class='universe'></ul>\");\n    for(let i = 0; i < 3; i++){\n      let $tower = $(\"<ul class='tower'></ul>\").data(\"towerNum\", i);\n      $(this.view).append($tower);\n      for(let k = 0; k < 3; k++) {\n        let spots = $(\"<li>\").addClass(\"spot\");\n        $tower.append(spots);\n      }\n    }\n  }\n  \n  generateBlock($spot, num){\n    $spot.removeClass(\"disc-1\");\n    $spot.removeClass(\"disc-2\");\n    $spot.removeClass(\"disc-3\");\n    if(num === 3) { \n      $spot.addClass(\"disc-3\");\n    } else if (num === 2) {\n      $spot.addClass(\"disc-2\");\n    } else if (num === 1) {\n      $spot.addClass(\"disc-1\");\n    }\n  }\n  \n  render() {\n    const that = this;\n    const towers = $('.tower');\n    for(let k = 0; k < 3; k++){\n      let visualTower = towers.eq(k);\n      console.log($(\"visualTower>li\"));\n      let logicTower = that.game.towers[k];\n      for(let i = 0; i < logicTower.length; i++){\n        that.generateBlock(visualTower.eq(i), logicTower[i]);\n      }\n    }\n  }\n  \n} // view end\n\nmodule.exports = HanoiView;\n\n//# sourceURL=webpack:///./js/hanoi_view.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const HanoiGame = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\nconst HanoiView = __webpack_require__(/*! ./hanoi_view.js */ \"./js/hanoi_view.js\");\n\n$( () => {\n  const rootEl = $('.game');\n  const game = new HanoiGame();\n  const view = new HanoiView(game, rootEl);\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });