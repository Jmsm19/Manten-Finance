# frozen_string_literal: true

# Account model
class Account < ApplicationRecord
  belongs_to :user

  enum account_type: { bank: 0, credit_card: 1 }
  enum currency: { bolivars: 0, dollars: 1 }

  validates :account_type, presence: true
  validates :currency, presence: true
  validates :user_id, presence: true
  validates :name, presence: true
  validates :name, unique_account_name_per_user: true
end
