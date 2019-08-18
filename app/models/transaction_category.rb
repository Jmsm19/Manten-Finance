# frozen_string_literal: true

# Transaction Category model
class TransactionCategory < ApplicationRecord
  has_many :transactions

  enum category_type: { expense: 0, income: 1 }

  validates :name, presence: true
  validates :category_type, presence: true
end
