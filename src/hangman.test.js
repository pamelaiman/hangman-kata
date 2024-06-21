import { hangman } from "./hangman.js";
import { test, expect } from "@jest/globals";

test("hangman to find word `help`", () => {
  expect(hangman(["h", "e", "l"], "help")).toEqual(["h", "e", "l", "_"]);
});

test("hangman to find word `labrat`", () => {
  expect(hangman(["l"], "labrat")).toEqual(["l", "_", "_", "_", "_", "_"]);
});

test("hangman to find word `ball`", () => {
  expect(hangman(["b", "a", "l"], "ball")).toEqual(["b", "a", "l", "l"]);
});

test("hangman to find word `AlPha`", () => {
  expect(hangman(["a", "l", "p", "h"], "AlPha")).toEqual([
    "a",
    "l",
    "p",
    "h",
    "a",
  ]);
});

test("hangman to find word `mandarin`", () => {
  expect(hangman(["u", "e", "a", "m", "d", "y"], "mandarin")).toEqual([
    "m",
    "a",
    "_",
    "d",
    "a",
    "_",
    "_",
    "_",
  ]);
});

test("hangman to find word `racecar`", () => {
  expect(hangman(["r", "c", "e"], "racecar")).toEqual([
    "r",
    "_",
    "c",
    "e",
    "c",
    "_",
    "r",
  ]);
});
