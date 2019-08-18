# frozen_string_literal: true

# Transaction model
class Transaction < ApplicationRecord
  belongs_to :account, dependent: :destroy
  belongs_to :transaction_category

  validates :amount, presence: true
  validates :description, presence: true
  validates :account_id, presence: true
  validates :transaction_category_id, presence: true
  validates :date, presence: true
end
