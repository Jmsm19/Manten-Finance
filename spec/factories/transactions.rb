# frozen_string_literal: true

FactoryBot.define do
  factory :income_transaction, class: 'Transaction' do
    description { 'transaction_1' }
    amount { 100_000 }
    date { 1.days.from_now }
    association :transaction_category, factory: :income_transaction_category
    association :account, factory: :account
  end

  factory :expense_transaction, class: 'Transaction' do
    description { 'transaction_1' }
    amount { 100_000 }
    date { 1.days.from_now }
    association :transaction_category, factory: :expense_transaction_category
    association :account, factory: :account
  end
end
