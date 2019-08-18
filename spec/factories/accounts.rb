# frozen_string_literal: true

FactoryBot.define do
  factory :account do
    name { 'BOD' }
    currency { 'bolivars' }
    account_type { 'bank' }
    initial_amount { '0.0' }
    user
  end
end
