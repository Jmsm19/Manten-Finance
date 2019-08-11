# frozen_string_literal: true

module Api
  module V1
    # Sessions controller
    class SessionsController < Api::V1::BaseController
      include CurrentUserConcern

      def create
        user = User.find_by(email: params[:email].downcase)

        if user&.authenticate(params[:password])
          reset_session
          session[:user_id] = user.id
          render json: UserSerializer.new(user).serialized_json,
                 status: :created
        else
          head :unauthorized
        end
      end

      def logged_in
        if @current_user
          render json: UserSerializer.new(@current_user).serialized_json
        else
          head :unauthorized
        end
      end

      def logout
        if @current_user
          reset_session
          head :ok
        else
          head :unauthorized
        end
      end
    end
  end
end
