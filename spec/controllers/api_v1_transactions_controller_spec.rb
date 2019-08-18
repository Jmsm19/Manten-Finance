# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::TransactionsController, type: :controller do
  let(:account) { create :account }

  before(:each) do
    @user = account.user
    @transaction = account.transactions.first
  end

  describe 'GET #index' do
    it 'returns Unauthorized when not logged in' do
      get :index, params: { account_id: account.id }
      expect(response).to have_http_status(:unauthorized)
    end

    it 'returns http OK' do
      login_user @user
      get :index, params: { account_id: account.id }
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST #create' do
    it 'returns Unauthorized when not logged in' do
      post :create, params: { account_id: account.id }
      expect(response).to have_http_status(:unauthorized)
    end

    it 'returns Unprocessable Entity on missing or wrong parameters' do
      login_user @user
      post :create, params: { account_id: account.id }
      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'returns http Created' do
      login_user @user
      post :create,
           params: {
             account_id: account.id,
             amount: Faker::Number.decimal(l_digits: 2),
             description: Faker::Lorem.sentence,
             transaction_category_id: create(:income_transaction_category).id,
             date: Faker::Date.backward(days: 14)
           }
      expect(response).to have_http_status(:created)
    end
  end

  describe 'GET #show' do
    it 'returns Unauthorized when not logged in' do
      get :show, params: { account_id: account.id, id: @transaction.id }
      expect(response).to have_http_status(:unauthorized)
    end

    it 'returns Not Found on missing resource' do
      login_user @user
      get :show, params: { account_id: account.id, id: 9_999 }
      expect(response).to have_http_status(:not_found)
    end

    it 'returns http OK' do
      login_user @user
      get :show, params: { account_id: account.id, id: @transaction.id }
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'PUT #update' do
    it 'returns Unauthorized when not logged in' do
      put :update, params: { account_id: account.id, id: @transaction.id }
      expect(response).to have_http_status(:unauthorized)
    end

    it 'returns Not Found on missing resource' do
      login_user @user
      put :update, params: { account_id: account.id, id: 9_999 }
      expect(response).to have_http_status(:not_found)
    end

    it 'returns Unprocessable Entity on missing or wrong parameters' do
      login_user @user
      put :update,
          params: { account_id: account.id, id: @transaction.id, date: 1_234 }
      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'returns http OK' do
      login_user @user
      new_date = 1.year.from_now.strftime('%Y-%m-%d')
      put :update,
          params: {
            account_id: account.id, id: @transaction.id, date: new_date
          }
      expect(response).to have_http_status(:ok)

      updated_date = body_as_json['data']['attributes']['date']
      expect(updated_date).to eq(new_date)
    end
  end

  describe 'DELETE #destroy' do
    it 'returns Unauthorized when not logged in' do
      delete :destroy, params: { account_id: account.id, id: @transaction.id }
      expect(response).to have_http_status(:unauthorized)
    end

    it 'returns Not Found on missing resource' do
      login_user @user
      delete :destroy, params: { account_id: account.id, id: 9_999 }
      expect(response).to have_http_status(:not_found)
    end

    it 'returns http OK' do
      login_user @user
      delete :destroy, params: { account_id: account.id, id: @transaction.id }
      expect(response).to have_http_status(:ok)
    end
  end
end
