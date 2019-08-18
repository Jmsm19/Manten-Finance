# frozen_string_literal: true

FactoryBot.define do
  factory :account do
    name { 'BOD' }
    currency { 'bolivars' }
    account_type { 'bank' }
    initial_amount { '0.0' }
    user

    after :create do |account|
      create_list :income_transaction, 20, account: account
      create_list :expense_transaction, 10, account: account
    end
  end
end
