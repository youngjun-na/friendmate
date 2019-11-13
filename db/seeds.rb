# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'
# Boilerplate: User.create(first_name: "", last_name: "", password: "", email: "", birthday: Date.new(y,m,d), gender: "" )
# User.create(first_name: "Youngjun", last_name: "Na", password: "password", email: "yjna4006@gmail.com", birthday: Date.new(1992,4,7), gender: "Male" )

# a = User.new(first_name: "Leslie", last_name: "Knope", password: "youngjun", email: "lknope@pawnee.gov", birthday: Date.new(1975,1,18), gender: "Female" )
# a.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/leslie.png"), filename:"leslie.png")
# a.save
# b = User.new(first_name: "Ron", last_name: "Swanson", password: "youngjun", email: "rswanson@pawnee.gov", birthday: Date.new(1962,4,21), gender: "Male" )
# b.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/ron.png"), filename:"ron.png")
# b.save
# c = User.new(first_name: "Jesse", last_name: "Pinkman", password: "youngjun", email: "420blazeit@hotmail.com", birthday: Date.new(1984,9,24), gender: "Male" )
# c.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/jesse.png"), filename:"jesse.png")
# c.save
# d = User.new(first_name: "Walter", last_name: "White", password: "youngjun", email: "heisenburg@gmail.com", birthday: Date.new(1959,9,7), gender: "Male" )
# d.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/walt.png"), filename:"walt.png")
# d.save
# e = User.new(first_name: "Ben", last_name: "Wyatt", password: "youngjun", email: "bwyatt@pawnee.gov", birthday: Date.new(1974,11,14), gender: "Male" )
# e.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/ben.png"), filename:"ben.png")
# e.save
# f = User.new(first_name: "Donna", last_name: "Meagle", password: "youngjun", email: "donna@treatyoself.com", birthday: Date.new(1977,12,10), gender: "Female" )
# f.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/donna.png"), filename:"donna.png")
# f.save
# g = User.new(first_name: "Ann", last_name: "Perkins", password: "youngjun", email: "annp@pch.gov", birthday: Date.new(1976,7,21), gender: "Female" )
# g.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/ann.png"), filename:"ann.png")
# g.save
# h = User.new(first_name: "Chris", last_name: "Trager", password: "youngjun", email: "ctraeger@pawnee.gov", birthday: Date.new(1967,10,26), gender: "Male" )
# h.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/chris.png"), filename:"chris.png")
# h.save
j = User.new(first_name: "Andy", last_name: "Dwyer", password: "youngjun", email: "burtmacklin@yahoo.com", birthday: Date.new(1981,1,1), gender: "Male" )
j.profile_pic.attach(io: File.open("s3://friendmate-pro/profile_pic/andy.png"), filename:"andy.png")
j.save
# i = User.new(first_name: "April", last_name: "Ludgate", password: "youngjun", email: "aludgate@.pawnee.gov", birthday: Date.new(1989,4,13), gender: "Female" )
# i.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/april.png"), filename:"april.png")
# i.save
# k = User.new(first_name: "Tom", last_name: "Haverford", password: "youngjun", email: "tom@rentaswag.com", birthday: Date.new(1985,4,28), gender: "Male" )
# k.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/tom.jpg"), filename:"tom.jpg")
# k.save
# l = User.new(first_name: "Jerry", last_name: "Gergich", password: "youngjun", email: "jltgergich@pawnee.gov", birthday: Date.new(1948,2,29), gender: "Male" )
# l.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/larry.png"), filename:"larry.png")
# l.save
# m = User.new(first_name: "Tammy", last_name: "Swanson", password: "youngjun", email: "tswanson@pls.gov", birthday: Date.new(1962,11,13), gender: "Female" )
# m.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/tammy2.png"), filename:"tammy2.png")
# m.save
# n = User.new(first_name: "Skyler", last_name: "White", password: "youngjun", email: "skyler.white@gmail.com", birthday: Date.new(1970,8,11), gender: "Female" )
# n.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/skyler.jpeg"), filename:"skyler.jpeg")
# n.save
# o = User.new(first_name: "Jimmy", last_name: "McGill", password: "youngjun", email: "saul@bettercallsaul.com", birthday: Date.new(1965,7,20), gender: "Male" )
# o.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/saul.png"), filename:"saul.png")
# o.save
# p = User.new(first_name: "Hank", last_name: "Schrader", password: "youngjun", email: "hschrader@dea.gov", birthday: Date.new(1968,6,23), gender: "Male" )
# p.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/hank.png"), filename:"hank.png")
# p.save
# q = User.new(first_name: "Gustavo", last_name: "Fring", password: "youngjun", email: "gus@lospollos.com", birthday: Date.new(1958,10,3), gender: "Male" )
# q.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/gus.png"), filename:"gus.png")
# q.save
# r = User.new(first_name: "Mike", last_name: "Ehrmantraut", password: "youngjun", email: "mikee@gmail.com", birthday: Date.new(1948,8,29), gender: "Male" )
# r.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/mike.png"), filename:"mike.png")
# r.save
# s = User.new(first_name: "Todd", last_name: "Alquist", password: "youngjun", email: "toddtheman@gmail.com", birthday: Date.new(1986,3,15), gender: "Male" )
# s.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/todd.png"), filename:"todd.png")
# s.save
# t = User.new(first_name: "Lydia", last_name: "Rodarte-Quayle", password: "youngjun", email: "lquayle@madrigal.com", birthday: Date.new(1970,9,28), gender: "Female" )
# t.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/lydia.png"), filename:"lydia.png")
# t.save
# u = User.new(first_name: "Brandon", last_name: "Mayhew", password: "youngjun", email: "badger@hotmail.com", birthday: Date.new(1985,11,20), gender: "Male" )
# u.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/badger.png"), filename:"badger.png")
# u.save
# v = User.new(first_name: "Peter", last_name: "Baker", password: "youngjun", email: "skinnypete@hotmail.com", birthday: Date.new(1983,2,19), gender: "Male" )
# v.profile_pic.attach(io: File.open("/Users/youngjun.na/Desktop/pete.png"), filename:"pete.png")
# v.save
# t = User.new(first_name: "", last_name: "", password: "youngjun", email: "", birthday: Date.new(), gender: "" )