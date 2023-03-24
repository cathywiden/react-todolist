functionality
[x] generate list -- DisplayTasks.jsx
[x] add items -- AddTask.jsx
[x] disallow adding blank tasks
[x] delete items
[x] use localstorage 
[x] entries can be edited
[x] lifting state up: sorting logic in App.jsx
[x] mark tasks as complete
[x] auto sort: when a task is marked complete, move it down on the list
[x] auto sort: pending tasks in order of longest waiting time since creation on top
[x] display completed entries on bottom (not sorted: complete means complete)
[x] toggle between pending/complete
[x] timestamp all entries: Date.now() in LS
[x] add prio flag && store in LS
[x] manual sorting: sort prio on top
[ ] no empty field accepted after editing entries
[x] newest/youngest pending task appended to bottom of pending list
[x] search
[ ] auto refresh displayed list on prio flag add/deletion

general
[x] basic styling
[x] structure
[ ] clean up code
[x] use at least 3 components

misc
[ ] alert upon trying to add blank entries
[ ] alert upon adding duplicates
[x] no SPA is complete without a footer

bugs
[ ] original list disappears if I change status on any item in a search (deleting works!)