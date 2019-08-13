# frozen_string_literal: true

# User model
class User < ApplicationRecord
  has_secure_password
  before_save { self.email = email.downcase }

  has_many :accounts, dependent: :destroy

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i.freeze

  validates :name, presence: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :email,
            presence: true,
            uniqueness: { case_sensitive: false },
            format: { with: EMAIL_REGEX }
end
