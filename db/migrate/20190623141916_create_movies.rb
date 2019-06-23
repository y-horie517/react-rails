class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title,        null: false, default: "無題"
      t.string :description,  null: false, default: ""
      t.string :url,          null: false, default: ""
      t.timestamps
    end
  end
end
