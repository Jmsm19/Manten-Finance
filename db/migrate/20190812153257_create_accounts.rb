class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :name, null: false
      t.integer :account_type, default: 0
      t.integer :currency, default: 0
      t.decimal :initial_amount, default: 0
      t.references :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
