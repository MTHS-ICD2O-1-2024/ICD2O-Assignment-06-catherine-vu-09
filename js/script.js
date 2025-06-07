// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Mr. Coxall
// Created on: June 7 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function gets a random word from the API
 * The 'async' keyword is used because fetching data from the internet takes time
 */
async function getRandomWord() {
  try {
    const resultJSON = await fetch(
      'https://random-word-api.herokuapp.com/word?'
    )
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    // Get a random index based on the length of the array
    const randomIndex = Math.floor(Math.random() * jsonData.length)
    const randomWord = jsonData[randomIndex]

    // Output the random word
    document.getElementById('random-word').innerHTML =
      '<b>Random Word:</b> "' + randomWord +'"<br />'
  } catch (error) {
    console.error(error)
  }
}

