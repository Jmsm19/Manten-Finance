# frozen_string_literal: true

module Api
  module V1
    # Sessions controller
    class RegistrationsController < Api::V1::BaseController
      def create
        user = User.new(user_params)

        if user.save
          head :created
        else
          render json: { errors: user.errors }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(
          :name,
          :email,
          :password,
          :password_confirmation
        )
      end
    end
  end
end
