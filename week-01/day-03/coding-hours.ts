'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52


var daily:number = 6;
var semester:number = 17;
var workday:number = 5;
var workhours;
var sumhours = 24 * 7 * 17;

workhours = daily * workday * semester;

console.log( 'Coding hours in 17 weeks: ' + workhours + 'h' );


console.log('Which is ~' + Math.ceil(workhours / sumhours * 100) + '% of the 17 weeks.' );

console.log('Which is ~' + Math.ceil( daily * workday /  52 * 100) + '% of the avarage working hours.' );





