class AddColumnNumToMovie < ActiveRecord::Migration[5.2]
  def up
    add_column :movies, :num, :integer
    add_index :movies, :num, unique: true
  end

  def down
    remove_column :movies, :num, :integer
    remove_index :movies, :num, unique: true
  end
end
