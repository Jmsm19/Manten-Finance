# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  def create_valid_user
    User.create!(
      name: Faker::Name.name, email: Faker::Internet.email, password: 'password'
    )
  end

  it 'creation throws error when missing parameters' do
    expect { User.create! }.to raise_error(ActiveRecord::RecordInvalid)
  end

  it 'creates user with correct parameters' do
    expect { create_valid_user }.to change(User, :count)
  end
end
