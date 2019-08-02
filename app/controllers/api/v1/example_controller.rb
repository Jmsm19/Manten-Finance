# frozen_string_literal: true

module Api
  module V1
    # Example contoller
    class ExampleController < Api::V1::BaseController
      def index
        render json: { example: 'Some text from API' }
      end
    end
  end
end
