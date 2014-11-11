// PSEUDOCODE:

// For now I am going to focus on getting all of the events on one page (index.html) for purposes of debugging

// Create and Store: submit button, preferences and recipes

var submitButton = document.getElementById('submitButton');
// defines our submit button - SUCCESS

var preferencesList = document.getElementsByClassName('preference');
// identifies all of our prerences - SUCCESS

var recipeList = document.getElementsByClassName('recipe');
// calls all of the recipe elements - SUCCESS

// Edit: filterPreferences function to filter the preferences

var filterPreferences = function (preferencesList) {
  // debugger;
  for (i = 0; i < preferencesList.length; i ++) {
    if (preferencesList[i].checked) {
      for (j = 0; j < recipeList.length; j ++) {
        if (preferencesList[i].value === recipeList[j].id) {
            recipeList[j].style.display = 'block'; // shows item
          } // ends if value matches statement
           else {
          recipeList[j].style.display = 'none'; // hides item
          } // ends else statement
        } // ends for j statmement
      } // ends if preferencesList[i].checked
  } // end for i statement
} // ends filterPreferences function

// Insert: eventlistener to execute filterPreferences when submit button is clicked

submitButton.addEventListener('click', function() {

  filterPreferences(preferencesList);
}); // when submitButton event happens, call this function

// TODOS

// Seriously consider rewriting the app back to where it was when it initially worked. Then focus on the redo in jquery. Because it seems like it's going to make your life a whole lot easier.

// DEBUG: what needs to happen is that the recipes need to be filtered, so try to figure out what you were originally doing with the matches array. perhaps one more 'for' loop to check the matches values against recipeList and then use that to filter the recipes.
// DEBUG: recipes show correctly on first try. However, if the user redoes their options and hits submit again, it does not update the list.
// - Write jquery version (not required, but fun practice)
// - Revise to have recipes appear on the recipes.html page instead of index.html (right now, keeping everything on one page is helping me to debug.)