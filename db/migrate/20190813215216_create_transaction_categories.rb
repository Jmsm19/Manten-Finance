class CreateTransactionCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :transaction_categories do |t|
      t.string :name, null: false
      t.integer :category_type, default: 0

      t.timestamps
    end
  end
end
