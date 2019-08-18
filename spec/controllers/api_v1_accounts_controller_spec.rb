# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::AccountsController, type: :controller do
  let(:account) { create :account }

  before(:each) { @user = account.user }

  describe 'GET #index' do
    it 'returns Unauthorized when not logged in' do
      get :index
      expect(response).to have_http_status(:unauthorized)
    end

    it 'returns http success' do
      login_user @user
      get :index
      expect(response).to have_http_status(:ok)
    end

    # it 'returns the first 50 transactions from every account owned by user' do
    #   login_user @user
    #   get :index
    #   expect(body_as_json).to have_http_status(:ok)
    # end
  end

  describe 'POST #create' do
    it 'returns Unauthorized when not logged in' do
      post :create
      expect(response).to have_http_status(:unauthorized)
    end

    it 'returns Unprocessable Entity on missing or wrong parameters' do
      login_user @user
      post :create
      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'returns http Created' do
      login_user @user
      post :create,
           params: {
             name: Faker::Name.name,
             account_type: 'bank',
             currency: 'bolivars',
             initial_amount: '0.0'
           }
      expect(response).to have_http_status(:created)
    end
  end

  describe 'GET #show' do
    it 'returns Unauthorized when not logged in' do
      get :show, params: { id: 9_999 }
      expect(response).to have_http_status(:unauthorized)
    end

    it 'returns Not Found on missing resource' do
      login_user @user
      get :show, params: { id: 9_999 }
      expect(response).to have_http_status(:not_found)
    end

    it 'returns http success' do
      login_user @user
      get :show, params: { id: account.id }
      expect(response).to have_http_status(:ok)
    end

    # it 'returns the first 50 transactions from the account' do
    #   login_user @user
    #   get :show, params: { id: account.id }
    #   expect(body_as_json).to have_http_status(:success)
    # end
  end

  describe 'PUT #update' do
    it 'returns Unauthorized when not logged in' do
      put :update, params: { id: 1 }
      expect(response).to have_http_status(:unauthorized)
    end

    it 'returns Not Found on missing resource' do
      login_user @user
      put :update, params: { id: 9_999 }
      expect(response).to have_http_status(:not_found)
    end

    it 'returns Unprocessable Entity on missing or wrong parameters' do
      login_user @user
      put :update, params: { id: account.id }
      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'returns http success' do
      login_user @user
      new_account_name = Faker::Name.name
      put :update, params: { id: account.id, name: new_account_name }
      expect(response).to have_http_status(:ok)
      expect(Account.find(account.id).name).to eq(new_account_name)
    end
  end

  describe 'DELETE #destroy' do
    it 'returns Unauthorized when not logged in' do
      delete :destroy, params: { id: 1 }
      expect(response).to have_http_status(:unauthorized)
    end

    it 'returns Not Found on missing resource' do
      login_user @user
      delete :destroy, params: { id: 9_999 }
      expect(response).to have_http_status(:not_found)
    end

    it 'returns OK on successful delete of resource' do
      login_user @user
      delete :destroy, params: { id: account.id }
      expect(response).to have_http_status(:ok)
    end
  end
end
