class AddColumnTuhmbnailToMovie < ActiveRecord::Migration[5.2]
  def up
    add_column :movies, :thumbnail, :string
    add_index :movies, :thumbnail, unique: true
  end

  def down
    remove_column :movies, :thumbnail, :string
    remove_index :movies, :thumbnail, unique: true
  end
end
