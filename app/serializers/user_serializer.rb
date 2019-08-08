# frozen_string_literal: true

# User serializer
class UserSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attributes :name, :email
end
