Fabricator(:user) do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    password { Faker::Games::Pokemon.name }
    chores(count: 10)
end