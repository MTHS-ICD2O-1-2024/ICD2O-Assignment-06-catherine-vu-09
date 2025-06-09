// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: June 7 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function gets a random word from the API
 * The 'async' keyword is used because it will take time from the internet to give random word
 */
// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: June 7 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function gets a random fun fact from the API
 * The 'async' keyword is used because it will take time from the internet to get data
 */
async function getFunFact() {
  try {
    const response = await fetch(
      'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'
    )
    const data = await response.json()
    console.log(data)

    // Output the fun fact to the page
    document.getElementById('random-word').innerHTML =
      '<b>Fun Fact:</b> "' + data.text + '"<br />'
  } catch (error) {
    console.error(error)
    document.getElementById('random-word').innerHTML =
      'Sorry! Could not fetch a fun fact at the moment.'
  }
}
