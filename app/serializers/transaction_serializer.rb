# frozen_string_literal: true

# Transaction serializer
class TransactionSerializer
  include FastJsonapi::ObjectSerializer

  belongs_to :account
  set_key_transform :camel_lower

  attributes :description, :amount, :account, :transaction_category, :date
end
