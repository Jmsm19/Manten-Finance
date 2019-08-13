# frozen_string_literal: true

module Api
  module V1
    # Accounts controller
    class AccountsController < Api::V1::BaseController
      include CurrentUserConcern
      before_action :user_authenticated?

      def index
        accounts = @current_user.accounts.all
        render json: AccountSerializer.new(accounts).serialized_json,
               status: :ok
      end

      def create
        new_account = @current_user.accounts.new(account_params)

        if new_account.save
          render json: AccountSerializer.new(new_account).serialized_json,
                 status: :created
        else
          render json: { errors: new_account.errors },
                 status: :unprocessable_entity
        end
      end

      def show
        account = @current_user.accounts.find(params[:id])
        render json: AccountSerializer.new(account).serialized_json, status: :ok
      end

      def update
        account = @current_user.accounts.find(params[:id])

        if account.update_attributes(account_params)
          render json: AccountSerializer.new(account).serialized_json,
                 status: :ok
        else
          render json: { errors: account.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        account = @current_user.accounts.find(params[:id])
        account.destroy!
        head :ok
      end

      private

      def account_params
        params.permit(:name, :account_type, :currency, :initial_amount)
      end
    end
  end
end
