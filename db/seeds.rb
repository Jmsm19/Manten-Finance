# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

TransactionCategory.create(
  [
    {
      # Income
      name: 'Income',
      category_type: 'income'
    },
    { name: 'Salary', category_type: 'income' },
    { name: 'Salary', category_type: 'income' },
    { name: 'Loans', category_type: 'income' },
    { name: 'Sales', category_type: 'income' },
    { name: 'Others', category_type: 'income' },
    {
      # Expense
      name: 'Food',
      category_type: 'expense'
    },
    { name: 'Clothes', category_type: 'expense' },
    { name: 'Electronics', category_type: 'expense' },
    { name: 'Games', category_type: 'expense' },
    { name: 'Interests', category_type: 'expense' },
    { name: 'Restaurants', category_type: 'expense' },
    { name: 'Coffee', category_type: 'expense' },
    { name: 'Internet bill', category_type: 'expense' },
    { name: 'Electricity bill', category_type: 'expense' },
    { name: 'Phone bill', category_type: 'expense' },
    { name: 'Water bill', category_type: 'expense' },
    { name: 'Gas bill', category_type: 'expense' },
    { name: 'Television bill', category_type: 'expense' },
    { name: 'Taxi', category_type: 'expense' },
    { name: 'Gasoline', category_type: 'expense' },
    { name: 'Parking', category_type: 'expense' },
    { name: 'Car maintenance', category_type: 'expense' },
    { name: 'Movies', category_type: 'expense' },
    { name: 'Party', category_type: 'expense' },
    { name: 'Travel', category_type: 'expense' },
    { name: 'Medicine', category_type: 'expense' },
    { name: 'Personal care', category_type: 'expense' },
    { name: 'Doctor', category_type: 'expense' },
    { name: 'Marriage', category_type: 'expense' },
    { name: 'Pets', category_type: 'expense' },
    { name: 'Household improvement', category_type: 'expense' },
    { name: 'Education', category_type: 'expense' },
    { name: 'Ensurance', category_type: 'expense' },
    { name: 'Others', category_type: 'expense' }
  ]
)
