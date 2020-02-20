class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.string :first_name
      t.string :last_name
      t.integer :house
      t.integer :mobile
      t.string :email

      t.timestamps
    end
  end
end
