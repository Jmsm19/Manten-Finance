# frozen_string_literal: true

# Account serializer
class AccountSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attributes :name, :account_type, :currency, :initial_amount
end
