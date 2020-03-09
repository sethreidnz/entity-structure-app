# Entity Structure App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and I have kept the details about to install below my notes about the test.

## Notes from the coding test

I have done the best I can to complete this within the 2 hour limit but have only completed a very basic version of step 1. The things that I am missing to make myself happy with this are:

1. Error messages for the "people" and the "company" fields. I am using a popular library for doing forms in React but its the first time I've used it and the nature of the nested fields it is pretty complex. I have turned validation on for those fields, but I could not in the time limite determine how I am supposed to get the errors from those nested values (although the form doesn't let the user continue if they have not done the fields).
1. I regret using Typescript for such a small quick thing because it got in my way a little as I have only really been using it for react projects in personal time, not for work. However I would still use Typescript given the choice in a production application since it makes coloboration and testing a lot easier.
1. Ability to re-use a user, to list them more than once. I think it would be best if "relationship" was a multi-field and then just show this differently in the display page
1. Have it save somehow. I was planning on using something like Firebase, but thought I'd focus on the UI first as this is how I usually build things. Build from the UI up, and presumably we would have a API contract to start with so I would just base my assumptions on that. In this case I got to where I have and ran out of time for any integration with another service. I think you can still see how I would have done the logic API calls in the way that I've mocked out a promise.
1. Writing some tests. I didn't really have time to write any tests. I did actually try with jest and javascript-testing-library but there is some config required to get it working right with the react-hooks-forms library that I used and after fiddling with it for about 15 minutes I decided to leave it and write a note.

I think that the code however shows my style and I have done the most I could within the time frame it's quite a large task to complete all of the parts :-). If you would like some more examples of my coding I'm working on rebuilding my blog in Next.js at the moment which you can find here:

[sethreid-website](https://github.com/sethreidnz/sethreid-website)

___________________________________________________________________________________________________________

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
