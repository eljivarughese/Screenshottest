// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
{
}
//require('cypress-drag-drop')

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
//import { try } from 'bluebird';

addMatchImageSnapshotCommand(
  {
  failureThreshold: 0.00, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.0 }, // threshold for each pixel
  capture: 'viewport', // capture viewport in screenshot
  customSnapshotsDir:"C:/Elji/",
  customDiffDir:"C:/Elji/"
  }
);

Cypress.Commands.add("setResolution", (size) => {
  if (Cypress._.isArray(size)) {
     cy.viewport(size[0], size[1]);
   } else {
    cy.viewport(size);
  }
 })



