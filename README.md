========================================

**This to-do list will motivate you to get things done.**

Your entries are sorted by the time since you added them. This means that the app always shows entries first that you've been postponing *for the longest time*. 

If you ever want to *catch up* with your newest additions -- which I hope you do -- you'll simply have to do the ones on the top of your list first. Hopefully, this will give you the incentive to get them out of the way so that you can get more productive in your everyday life.

You can override this default setting by flagging items as prio (see the stars to the left side?) and then clicking on the button that says "★ up!". This will allow you to see your personal prio items on the very top of your list.

You can toggle between completed and pending status by clicking on the emjois. Hopefully, it is rather clear which emoji means which status 😅

========================================

**This is a React learning exercise to demonstrate the use of props, hooks, lifting states up, and event handling.**


**LIFTING STATE UP**

The *AddTask.jsx* component handles adding new tasks to the list. *DisplayTasks.jsx* handles displaying (rendering) the list of tasks, updates the status of tasks, and removes tasks The handleCompletion() in DisplayTasks.jsx is only responsible for sorting the todos when the user completes a task (marks an item completed or toggles it back to incomplete).

The handleSort function in *App.jsx* is responsible for sorting the todos based on the selected sorting criteria, which is then passed down to DisplayTasks.jsx as a prop. By keeping the sorting logic in App.jsx, it allows the sorting itself to be done at the highest level. If in the future we have other components that also require access to the sorted todo list, we can pass it down as a prop from App.jsx.

The last component, *Footer.jsx* is self-explanatory.


**EVENT HANDLING**

Event handling is used to listen and respond to user interactions. 

AddTask.jsx: *submit* event -- "add task" button/ENTER to add a new entry

DisplayTasks.jsx: *click* event -- user clicks the "priority" button or the "completion" button to toggle the priority and completion status of the entries

Event handling in App.jsx: *click* event associated with the "sort" button


**PROPS**

Data and functions are passed down from the parent component (App.jsx) to the child components (AddTask.jsx and DisplayTasks.jsx) using props.

*addTodo()* is passed down from App.jsx to AddTask.jsx as a prop to handle adding a new entry. App.jsx also passes down the *todos*, *removeTodo*, and *setTodos* functions and the *searchTerm* state a prop to DisplayTasks.jsx as props to display and update the list of entries.

Additionally, App.jsx passes down the *sortByPriority* state to DisplayTasks.jsx as a prop. This prop is used to determine the sorting order of the displayed tasks.

Finally, the *handleSort* function is passed down from App.jsx to DisplayTasks.jsx as a prop. This function is called when the user clicks the sort button and is used to sort the tasks based on the current sorting criteria.


**HOOKS**

The *useState* hook is used to manage the state of the entire component (i.e., not just the todo list, but also the search term and priority sorting status). LocalStorage is used so that user data is persistent between sessions.

When the component is first rendered, the state is initialized by calling the useState hook and providing an initial value, which is either an empty array or the previously stored todo list retrieved from LS using the getItem() method.

The setTodos() function is used to update the state of the todo list. It takes a new state as an argument and triggers a re-render of the component. It also stores the updated list in LocalStorage using the setItem() method.

The setSearchTerm() function is used to update the state of the search term input. It takes the value of the input as an argument and updates the state accordingly.

The setSortByPriority() function is used to update the state of the priority sorting status. It toggles between true and false depending on whether the user has clicked the sort button to sort by priority or not.


========================================

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/oPQSpNGz)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10601446&assignment_repo_type=AssignmentRepo)
# Todos

En inlämningsuppgift för BCU22D. I denna uppgift skall ni alltså bygga en todo-lista i react. Ni har fått detta projekt som mall så att alla har någonting att utgå ifrån. Men, ingenting mer än själva projektet har gjorts. Nu skall ni, genom att använda alla koncept vi har pratat om hittills i kursen, skapa en todo-lista.

## Krav för G

- Skapa en hårdkodad lista med egna todos (ni kan välja vilka todos som helst)
- Presentera listan på skärmen med kontroll, kanske med hjälp av en ul/li
- Ni skall kunna ta bort en todo ur listan
- Ni behöver använda minst en komponent
- Använda localStorage för att spara er lista. Jag vill inte att allting börjar om från början varje siduppdatering :)
- Bra struktur på er kod. Detta betyder självförklarande variabelnamn och funktionsnamn samt inga kommentarer.

## Krav för VG

- Samtliga punkter för G
- Ni använder er av minst tre komponenter
- Ni använder er av Lifting State Up
- Ni skall kunna skriva in egna todos via ett formulär
- Ni skall visa även klara händelser och göra så att de blir "oklara" igen
- Ni skall kunna sortera er lista på något sätt, hur och på vad är upp till er

## Förslag

Mitt förslag är att ni funderar över vilket betyg ni vill uppnå och börjar planera för de komponenter som behövs för just det. Fokusera på funktionalitet framför utseende. Såklart att ni får styla hur mycket ni vill, men det är funktionalitet jag kommer att bedöma i denna uppgift. 
