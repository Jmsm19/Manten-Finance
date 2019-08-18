# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_13_215631) do
  create_table 'accounts', force: :cascade do |t|
    t.string 'name', null: false
    t.integer 'account_type', default: 0
    t.integer 'currency', default: 0
    t.decimal 'initial_amount', default: '0.0'
    t.integer 'user_id', null: false
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index %w[user_id], name: 'index_accounts_on_user_id'
  end

  create_table 'transaction_categories', force: :cascade do |t|
    t.string 'name', null: false
    t.integer 'category_type', default: 0
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'transactions', force: :cascade do |t|
    t.decimal 'amount', default: '0.0'
    t.string 'description'
    t.integer 'account_id', null: false
    t.integer 'transaction_category_id', null: false
    t.date 'date'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index %w[account_id], name: 'index_transactions_on_account_id'
    t.index %w[transaction_category_id],
            name: 'index_transactions_on_transaction_category_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'name'
    t.string 'email'
    t.string 'password_digest'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index %w[email], name: 'index_users_on_email', unique: true
  end
end
