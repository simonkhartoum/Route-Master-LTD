# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Owner.create([
#   { name: 'Barry Allan', contact: 767453234 },
#   { name: 'Jane Smith', contact:  723459865 },
#   { name: 'Mike Johnson', contact: 765326795 },
#   { name: 'Emily Brown', contact: 712569832 },
#   { name: 'David Lee', contact: 719802254 },
# ])

Car.create([
  { number_plate: 'KCW 458E', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhO6qoJbfQ7EQ35gTQbjyS5YL4lCXoWOgiAg&usqp=CAU', owner_id: 1, driver_name: 'Jack Kadere', driver_contact: 756245987 },
  { number_plate: 'KDL 886F', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBTmjtwOsMw6SKihcHGpdcCaKWRRtQqaeCQ&usqp=CAU', owner_id: 2, driver_name: 'Amos Wako', driver_contact: 709432165 },
  { number_plate: 'KDH 654T', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyjWT1RwZQpK6ljcofmuSQzAdea8eONn8CLhZWNQcjRYeNDPpWoTyGGu2LqPvRoj26jg&usqp=CAU', owner_id: 3, driver_name: 'Mike Johnson', driver_contact: 765432109 },
  { number_plate: 'KDM 111R', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRC6J4dnBXGwfgJYpOXoz7bPRnr6KZrgtYPfmBciZrZzKeWDm-I5TtOx1E26m6o0l8Bg&usqp=CAU', owner_id: 4, driver_name: 'Emily Brown', driver_contact: 756789012 },
  { number_plate: 'KDA 569P', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpSEoXjfrokOEzan3IoF-FtuVtTw15SISQoH9XmukpNJ8Jbr1D4-Cwz6lhK0eYblSFZA&usqp=CAU', owner_id: 5, driver_name: 'David Lee', driver_contact: 787012345 }
])
