# Set up a "Hello world" project with rails-react gem

![Microverse](https://img.shields.io/badge/Microverse-blueviolet)

> A monolithic approach to using rails and react

![screenshot](./app_screenshot.png)

## Built With

- Ruby on Rails
- PostgreSQL
- React

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- [Ruby](https://www.ruby-lang.org/en/)
- [Rails](https://gorails.com/)
- [React](https://github.com/reactjs/react-rails)

### Setup

- Make sure you have Ruby on Rails set up properly on your computer
- Clone or download this repo on your machine
- Enter project directory

### Install

```sh
bundle install

# Install JS dependencies
yarn
```

### Database

```sh
# Create user
sudo -u postgres createuser hello_rails_react -s

# Create the database
rails db:create

## Apply migration
rails db:migrate

# Seed database with 5 greetings
rails db:seed
```

### Run

```sh
rails s
```

### Troubleshoot

```sh
### Undo migration
rake db:migrate VERSION=0
```

## Author

👤 **Usman**

- GitHub: [@usmansbk](https://github.com/usmansbk)
- LinkedIn: [Usman Suleiman Babakolo](https://linkedin.com/in/usmansbk)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse

## License

[MIT](./LICENSE)
