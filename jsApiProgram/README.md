# TossACoinToYourWitcher

This is a modified pig game variant app that stores player data in a JSON Object and displays game stats. If a player already exists the profile is used and stats updated. No password is necessary a player is created or found and used by typing in a player name.


## Installation
clone this repo git@github.com:Rpascar1/railsJsAPI.git

Add this line to your application's Gemfile if it does not exist:

```ruby
gem 'pg'
# gem 'sqlite3', '~> 1.4'
```
And then execute:

    $ bundle install

    start your Postgres server
    nvaigate to the railsJsAPI folder with the terminal and start a rails server
    
## Usage

make sure to create a postgres db and start the postgres server.


run this command in the command line if error says you need or do not have permission to execute:

chmod a+x ./bin/coral_getter

This will make the file executable.

Use this app to see in stock sps coral as well as anything under $100

## License
https://opensource.org/licenses/MIT

## Development



After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Rpascar1/coral_getter.
