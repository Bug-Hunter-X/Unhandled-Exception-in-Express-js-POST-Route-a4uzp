# Unhandled Exception in Express.js POST Route

This repository demonstrates a common error in Express.js applications: unhandled exceptions when processing request bodies.  The `bug.js` file contains the faulty code, which crashes if the POST request doesn't include a properly formatted JSON body.  `bugSolution.js` provides a corrected version with robust error handling.

## Problem

The original code attempts to access properties of the `req.body` object without checking if they exist or if the body parsing was successful. This leads to unhandled exceptions and application crashes when the request body is missing or malformed.

## Solution

The solution involves adding error handling using `try...catch` blocks and validating the `req.body` before accessing its properties.  It also utilizes the `express.json()` middleware's options for more robust error handling.