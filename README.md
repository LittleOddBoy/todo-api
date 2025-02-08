# todo-api

📃 a RESTful API to allow users to manage their to-do list.
This project is one of which is in the [roadmap.sh back-end project](https://roadmap.sh/projects/todo-list-api). Me and [ME-Atish](https://github.com/ME-Atish) are contributing to build this project, but you may find the project in [Community Solutions](https://roadmap.sh/projects/todo-list-api/solutions) under my profile.

If you want to use this API, we designed a CLI tool called [todo-cli](https://github.com/LittleOddBoy/todo-cli). Check that out!

**currently, under maintenance**

## Maintenance to-do

- [x] handle _user authentication_. (both)
- [ ] build an endpoint to _remove_ a task. (assigned to **ME-AT**)
- [x] build an endpoint to _update_ a task.
- [ ] build an endpoint to _read_ all the task. (assigned to **ME-AT**)
- [x] build the README file.
- [ ] ~~build an appropriate API document.~~
  - Due to project paradigm being functional, and low possibilities for `express`.
- [x] insert the project link on [roadmap.sh](https://roadmap.sh)

## Requirements

You may need the following being installed in order to run the project:

- Node.js and its package manager, npm
- MongoDB

## Installation

This is an API and you won't expect too much _installation_, you just clone the repository:

```bash
git clone https://github.com/LittleOddBoy/todo-api.git .
```

and run this command to build the code:

```bash
npm run build
```

and at the end, run the API with:

```bash
npm run start
```

It might be helpful if you set up an `.env` file in order to configure MongoDB and execution port in the way you want; This is how the file should look like:

```env
PORT=THE_PORT_YOU_PREFER
MONGO_URI=YOUR_DB_URI
```

It's okay if you don't pay attention to this file, because we have some defaults for it.

## Usage

Unfortunately, we don't have a plan to provide a better documentation for this project—at least for now. But in overall, there are certain endpoints you could run:

- `todos/create` with a JSON as the body of your request, contains only the title and the completed status of the task, first one as _string_ and second as _boolean_.
- `todos/read` _UNDER DEVELOPMENT_
- `todos/remove` _UNDER DEVELOPMENT_
- `todos/update` with the same approach as `create`, but with the id of the task you want to update.
- `users/signin` with your username and a password in the body of request, in order to create an account. **the response would be a private token that you may need to keep that in a good place!**
- `users/login` again with your username and password, to log-in your account and get your token again. **don't forget to keep your token safe!**
