# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::SessionsController, type: :controller do
  fixtures :users

  describe 'POST #create' do
    it 'throws error on invalid credentials' do
      post :create,
           params: {
             email: 'fake@email.com', password: 'fake_password', format: :json
           }
      expect(response.status).to eq(401)
    end

    it 'successfully logins with valid credentials' do
      user = users(:Manten)
      post :create,
           params: { email: user.email, password: 'password', format: :json }
      expect(response.status).to eq(201)
      expect(session[:user_id]).to eq(user.id)
      expect(body_as_json).to match(format_user_as_serializer(user))
    end
  end

  describe 'POST #logged_in' do
    it 'throws 401 status when not logged in' do
      post :logged_in
      expect(response.status).to eq(401)
    end

    it 'returns the logged in user data' do
      user = users(:Manten)
      session[:user_id] = user.id

      post :logged_in
      expect(body_as_json).to match(format_user_as_serializer(user))
    end
  end

  describe 'POST #logout' do
    it 'throws 401 status when not logged in' do
      post :logout
      expect(response.status).to eq(401)
    end

    it 'successfully logout user' do
      session[:user_id] = users(:Manten).id

      post :logout
      expect(response.status).to eq(200)
    end
  end
end
