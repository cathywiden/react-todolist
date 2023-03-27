========================================

**This to-do list will motivate you to get things done.**

Your entries are sorted by the time since you added them. This means that the app always shows entries first that you've been postponing *for the longest time*. 

If you ever want to *catch up* with your newest additions -- which I hope you do -- you'll simply have to do the ones on the top of your list first. Hopefully, this will give you the incentive to get them out of the way so that you can get more productive in your everyday life.

You can override this default setting by flagging items as prio (see the stars to the left side?) and then clicking on the button that says "★ up!". This will allow you to see your personal prio items on the very top of your list.

You can toggle between completed and pending status by clicking on the emojis. 

========================================

**This is a React learning exercise to demonstrate the use of props, hooks, lifting state up, and event handling in a Todo List application.**


**LIFTING STATE UP**

The *App.jsx* component manages the state of the entire application, including the todo list, search term, priority sorting status, and error state. It passes down the necessary state and functions as props to the child components. By keeping the sorting logic in App.jsx, it allows the sorting itself to be done at the highest level. If in the future we have other components that also require access to the sorted todo list, we can pass it down as a prop from App.jsx.

The child components do not manage state themselves but receive data and functions from the parent component to perform their respective tasks. The *AddTask.jsx* component handles adding new tasks to the list, while the *DisplayTasks.jsx* component handles displaying (rendering) the list of tasks, updating the status of tasks, and removing tasks. The *CompletedTasksCounter.jsx* component displays the count of completed tasks, and the *SearchPrioSorting.jsx* component handles sorting and searching tasks based on their priority status and search input, combined into a single file just for the ease of displaying the search bar and a prio sorting button together.


**EVENT HANDLING**

Event handling is used to listen and respond to user interactions. 

The AddTask.jsx component uses the *submit* event to listen to the "add task" button or ENTER key to add a new entry. The DisplayTasks.jsx component uses the *click* event to listen to user clicks on the "priority" button or the "completion" button to toggle the priority and completion status of the entries. The SearchPrioSorting.jsx component uses the *click* event to listen to the "sort" button to trigger the sorting based on the current sorting criteria.


**PROPS**

Data and functions are passed down from the parent component (App.jsx) to the child components (AddTask.jsx, DisplayTasks.jsx, CompletedTasksCounter.jsx, and SearchPrioSorting.jsx) using props.

*addTodo()* is passed down from App.jsx to AddTask.jsx as a prop to handle adding a new entry. App.jsx also passes down the *todos*, *removeTodo*, and *setTodos* functions and the *searchTerm*, *sortByPriority*, and *hasError* states as props to DisplayTasks.jsx to display and update the list of entries, and the count of completed tasks. Additionally, App.jsx passes down the *handleSort* function to SearchPrioSorting.jsx as a prop to handle sorting tasks based on their priority status and search input.


**HOOKS**

The *useState* hook is used to manage the state of the entire application. LocalStorage is used to make the data persistent between sessions.

When the component is first rendered, the state is initialized by calling the useState hook and providing an initial value, which is either an empty array or the previously stored todo list retrieved from LocalStorage using the getItem() method. 

The setTodos() function is used to update the state of the todo list. It takes a new state as an argument and triggers a re-render of the component. It also stores the updated list in LocalStorage using the setItem() method. 

The setSearchTerm() function is used to update the state of the search term input. It takes the value of the input as an argument and updates the state accordingly. 

The setSortByPriority() function is used to update the state of the priority sorting status. It toggles between true and false depending on whether the user has clicked the sort button to sort by priority or not. 

The setHasError() function is used to update the state of the error message when a new entry is not added due to an empty input field. It toggles between true and false depending on the input validation.