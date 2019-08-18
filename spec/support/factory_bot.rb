# frozen_string_literal: true

require 'factory_bot'

RSpec.configure do |config|
  # Factory Bot helper methods
  config.include FactoryBot::Syntax::Methods

  config.before(:suite) { FactoryBot.find_definitions }
end
