class CreateJwtBlacklist < ActiveRecord::Migration[5.2]
  def change
    create_table :jwt_blacklist do |t|
      t.string :jti

      t.timestamps
    end
  end
end
