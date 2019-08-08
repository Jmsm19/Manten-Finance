# frozen_string_literal: true

module CurrentUserConcern
  extend ActiveSupport::Concern
  included { before_action :set_current_user }

  def set_current_user
    user_session = session[:user_id]
    @current_user = User.find(user_session) if user_session
  end
end
