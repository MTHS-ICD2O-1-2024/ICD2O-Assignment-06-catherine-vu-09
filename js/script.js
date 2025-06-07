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
    // Fetch a random word from the API
    const resultJSON = await fetch('https://random-word-api.herokuapp.com/word')
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    // The API returns an array, take the first word
    const randomWord = jsonData[0]

    // Output the random word to the page
    document.getElementById('random-word').innerText = randomWord
  } catch (error) {
    console.error(error)
    document.getElementById('random-word').innerText = 'Failed to fetch a word. Please try again.'
  }
}

