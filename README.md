# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The kids module invokes an event listener that activates an alert window when a childs name is clicked. the logic of the algorithm creates a variable named itemClicked which holds the clickEvent.target. We assign the itemClicked variable with the childs name and wish, which are taken from the state data generated in the "Kids" function HTML. Next, we create an if statement that checks if the event type corresponds to a child state. This ensures that the window alert only shows up when a childs name is clicked on. Finally, we create a window alert containing the information we want to display when the window alert is activated. In this case it provides the childs name, and the childs wish they want to recieve.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > We set the findCelebrityMatch() function equal to a variable named kidsStar, which takes the findCelebrity function and passes the kid and celebrities as parameters. The function is designed to find a match by iterating through the celebrities array and setting an if statement to match a clebrity's id with a kid's celebrityId. The function then returns the correct celebrity matched with each kid. The four instances of interpolation on line 29 output the kid's name, the corresponding celebrity, the sport the celebrity stars in, followed by the kids wish. 
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > This happens because we take the name of the celebrity from the state data and are set it equal to an clickEvent.target variable named celebritySport and celebrityName. The if statement on line 11 ensures that the window alert only shows up when a celebrity is clicked. When a celebrity is clicked, the window alert displays two instances of interpolation with the celebrityName and celebritySport varibales. This means that whenever a celebrity is clicked, the their name and the sport they play will appear in a window alert on the page.  
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Lines 1 through 3 represent our imports, gathering data from our pairings.js, CelebrityList.js, and Kids.js script files. This information is displayed in the applicationHTML which is shown on lines 8-24. underneath the kids header, the "kids" function is used to retrieve information about the kids names and wishes. The same applies to the celebrities and pairings functions. On line 5, we access the "container" id from our index.HTML file and assign it to a variable called mainContainer using the document.querySelector method. finally, we set our desired HTML output to a variable called applicationHTML, which is later assigned to the mainConatianer.innerHTML variable, rendering the HTML in the browser.   
