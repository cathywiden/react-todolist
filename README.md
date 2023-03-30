========================================

**This to-do list will motivate you to get things done.**

Your entries are sorted by the time since you added them. This means that the app always shows entries first that you've been postponing *for the longest time*. 

If you ever want to *catch up* with your newest additions -- which I hope you do -- you'll simply have to do the ones on the top of your list first. Hopefully, this will give you the incentive to get them out of the way so that you can get more productive in your everyday life.

You can override this default setting by flagging items as prio (see the stars to the left side?) and then clicking on the button that says "★ up!". This will allow you to see your personal prio items on the very top of your list.

You can toggle between completed and pending status by clicking on the emojis. 

========================================

**React Learning Exercise Description**

This app demonstrates the use of props, hooks, lifting state up, and event handling in a To-Do List application.

*Lifting State Up:*

The App.jsx component manages the state of the app, including the to-do list, search term, priority sorting status, and error state. 
It passes down the necessary state and functions as props to the child components, which handle adding, displaying, and managing tasks.

*Event Handling:*

Event handling is used to listen and respond to user interactions. The app uses different events, such as submit and click, to add, toggle, and sort tasks based on the user's input.

*Props and Hooks:*

Data and functions are passed down from the parent component to the child components using props. The app uses the useState and useEffect hooks to manage the state of the app and update LocalStorage whenever the state changes. The child components also use the useState hook to manage their respective states.