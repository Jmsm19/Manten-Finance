# frozen_string_literal: true

FactoryBot.define do
  factory :income_transaction_category, class: 'TransactionCategory' do
    name { Faker::Lorem.word }
    category_type { 'income' }
  end

  factory :expense_transaction_category, class: 'TransactionCategory' do
    name { Faker::Lorem.word }
    category_type { 'expense' }
  end
end
