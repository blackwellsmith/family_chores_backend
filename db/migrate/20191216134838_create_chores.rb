class CreateChores < ActiveRecord::Migration[5.2]
  def change
    create_table :chores do |t|
      t.string :name
      t.text :notes
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
