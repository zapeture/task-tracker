# Task Tracker app

_The following iplementation of the task is incomplete due to time constraint_

### Successful implementations

- Routes for adding and viewing
- Persistant storage using MongoDB

## Routes

- GET: /api/v1/tasks/ _get all tasks_

- GET: /api/v1/tasks/:id _get single task_

- POST: /api/v1/tasks/ _create new task_

- PUT /api/v1/tasks/ _Stop currently running task_

### UnSuccessful implementations

- End previous task on creation of new task
- Unit tests and deployment

### Incase of more time

> Incase of more time , i was going to implement the endpoint for
> stoping the currently running task , but filtering through all the tasks with the property
> of inProgess set to TRUE. I would the set them all to false.I was also going to implement a function that sets all the currently running task to incase a new task in created without stopping the previous task.I was also going to implement some small unit tests with the JEST package and deploy to Heroku and generate documentation with docGen in github
