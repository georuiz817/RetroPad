class ChangeMobileToStringInAddresses < ActiveRecord::Migration[6.0]
  def change
    change_column :addresses, :mobile, :string
  end
end
