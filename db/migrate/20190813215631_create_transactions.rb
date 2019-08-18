class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.decimal :amount, default: '0.0'
      t.string :description, null: true
      t.references :account, foreign_key: true, null: false
      t.references :transaction_category, foreign_key: true, null: false
      t.date :date, default: -> { 'CURRENT_TIMESTAMP' }

      t.timestamps
    end
  end
end
