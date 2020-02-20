class ChangeHouseToStringInAddresses < ActiveRecord::Migration[6.0]
  def change
    change_column :addresses, :house, :string
  end
end
