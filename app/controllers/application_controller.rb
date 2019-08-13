# frozen_string_literal: true

class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  rescue_from ActiveRecord::RecordNotFound do |exepction|
    render json: { error: exepction.message }, status: :not_found
  end

  private

  def user_authenticated?
    return head :unauthorized unless session[:user_id]
  end
end
