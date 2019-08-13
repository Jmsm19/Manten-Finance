# frozen_string_literal: true

class UniqueAccountNamePerUserValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    account = Account.find_by(name: value, user_id: record.user_id)
    record.errors.add(attribute, 'has already been taken') unless account.nil?
  end
end
