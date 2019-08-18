# frozen_string_literal: true

module Api
  module V1
    # Transactions controller
    class TransactionsController < Api::V1::BaseController
      include CurrentUserConcern
      before_action :user_authenticated?
      before_action :set_user_account

      def index
        transactions = @account.transactions
        render json: TransactionSerializer.new(transactions).serialized_json,
               status: :ok
      end

      def create
        transaction = @account.transactions.create(transaction_params)

        if transaction.save
          render json: TransactionSerializer.new(transaction).serialized_json,
                 status: :created
        else
          render json: { errors: transaction.errors },
                 status: :unprocessable_entity
        end
      end

      def show
        transaction = @account.transactions.find(params[:id])
        render json: TransactionSerializer.new(transaction).serialized_json,
               status: :ok
      end

      def update
        transaction = @account.transactions.find(params[:id])

        if transaction.update_attributes(transaction_params)
          render json: TransactionSerializer.new(transaction).serialized_json,
                 status: :ok
        else
          render json: { errors: transaction.errors },
                 status: :unprocessable_entity
        end
      end

      def destroy
        transaction = @account.transactions.find(params[:id])

        transaction.destroy!
        head :ok
      end

      private

      def transaction_params
        params.permit(:amount, :description, :transaction_category_id, :date)
      end

      def set_user_account
        return unless @current_user && params[:account_id]

        @account = @current_user.accounts.find(params[:account_id])
      end
    end
  end
end
