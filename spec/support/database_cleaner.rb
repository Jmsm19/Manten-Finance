# frozen_string_literal: true

require 'database_cleaner'

RSpec.configure do |config|
  # Database Cleaner
  config.before(:suite) { DatabaseCleaner.strategy = :deletion }

  config.before(:each) { DatabaseCleaner.clean }
end
