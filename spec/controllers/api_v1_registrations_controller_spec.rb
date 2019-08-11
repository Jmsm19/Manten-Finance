# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::RegistrationsController, type: :controller do
  describe 'POST #create' do
    it 'throws validation error on invalid parameters' do
      post :create, params: { user: { name: '', email: '' }, format: :json }
      expect(response.status).to eq(422)

      expect(body_as_json.keys).to match_array(%w[errors])
      expect(body_as_json[:errors].keys).to match_array(%w[name email password])
    end

    it 'registers new user' do
      post :create,
           params: {
             user: {
               name: Faker::Name.name,
               email: Faker::Internet.email,
               password: 'password'
             }
           }

      expect(response.status).to eq(201)
    end
  end
end
