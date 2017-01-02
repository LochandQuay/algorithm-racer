# README

algorithmRacer_ is a quick and easy way to test out your sorting and searching algorithms in the browser.

aR_ will run your code against our test cases for each category and assign a score based on speed and character count ("code golf"). We currently only support javascript code, but are looking to support more languages in the future.

Visit https://algo-racer.herokuapp.com/ for a demo!

aR_ is built mostly on React, with a Rails backend. We evaluate code safely inside a node vm module for our user sandbox, and validate sort/search functionality before submitting algorithms to be scored.

Features under development:

  * Leveraging web workers for more comprehensive testing without affecting user experience.
  * Expanding sandbox functionality to include "setup" code blocks
  * Display pages and comments for high-scoring algorithms 
