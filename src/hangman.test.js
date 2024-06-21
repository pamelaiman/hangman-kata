import { hangman } from "./hangman.js";
import { test, expect } from "@jest/globals";

test("hangman to find word `help`", () => {
  expect(hangman(["h", "e", "l"], "help")).toEqual(["h", "e", "l", "_"]);
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
