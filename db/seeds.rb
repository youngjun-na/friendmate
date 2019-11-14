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
# a.save
# b = User.new(first_name: "Ron", last_name: "Swanson", password: "youngjun", email: "rswanson@pawnee.gov", birthday: Date.new(1962,4,21), gender: "Male" )
# b.save
# c = User.new(first_name: "Jesse", last_name: "Pinkman", password: "youngjun", email: "420blazeit@hotmail.com", birthday: Date.new(1984,9,24), gender: "Male" )
# c.save
# d = User.new(first_name: "Walter", last_name: "White", password: "youngjun", email: "heisenburg@gmail.com", birthday: Date.new(1959,9,7), gender: "Male" )
# d.save
# e = User.new(first_name: "Ben", last_name: "Wyatt", password: "youngjun", email: "bwyatt@pawnee.gov", birthday: Date.new(1974,11,14), gender: "Male" )
# e.save
# f = User.new(first_name: "Donna", last_name: "Meagle", password: "youngjun", email: "donna@treatyoself.com", birthday: Date.new(1977,12,10), gender: "Female" )
# f.save
# g = User.new(first_name: "Ann", last_name: "Perkins", password: "youngjun", email: "annp@pch.gov", birthday: Date.new(1976,7,21), gender: "Female" )
# g.save
# h = User.new(first_name: "Chris", last_name: "Trager", password: "youngjun", email: "ctraeger@pawnee.gov", birthday: Date.new(1967,10,26), gender: "Male" )
# h.save
# j = User.new(first_name: "Andy", last_name: "Dwyer", password: "youngjun", email: "burtmacklin@yahoo.com", birthday: Date.new(1981,1,1), gender: "Male" )
# j.save
# i = User.new(first_name: "April", last_name: "Ludgate", password: "youngjun", email: "aludgate@.pawnee.gov", birthday: Date.new(1989,4,13), gender: "Female" )
# i.save
# k = User.new(first_name: "Tom", last_name: "Haverford", password: "youngjun", email: "tom@rentaswag.com", birthday: Date.new(1985,4,28), gender: "Male" )
# k.save
# l = User.new(first_name: "Jerry", last_name: "Gergich", password: "youngjun", email: "jltgergich@pawnee.gov", birthday: Date.new(1948,2,29), gender: "Male" )
# l.save
# m = User.new(first_name: "Tammy", last_name: "Swanson", password: "youngjun", email: "tswanson@pls.gov", birthday: Date.new(1962,11,13), gender: "Female" )
# m.save
# n = User.new(first_name: "Skyler", last_name: "White", password: "youngjun", email: "skyler.white@gmail.com", birthday: Date.new(1970,8,11), gender: "Female" )
# n.save
# o = User.new(first_name: "Jimmy", last_name: "McGill", password: "youngjun", email: "saul@bettercallsaul.com", birthday: Date.new(1965,7,20), gender: "Male" )
# o.save
# p = User.new(first_name: "Hank", last_name: "Schrader", password: "youngjun", email: "hschrader@dea.gov", birthday: Date.new(1968,6,23), gender: "Male" )
# p.save
# q = User.new(first_name: "Gustavo", last_name: "Fring", password: "youngjun", email: "gus@lospollos.com", birthday: Date.new(1958,10,3), gender: "Male" )
# q.save
# r = User.new(first_name: "Mike", last_name: "Ehrmantraut", password: "youngjun", email: "mikee@gmail.com", birthday: Date.new(1948,8,29), gender: "Male" )
# r.save
# s = User.new(first_name: "Todd", last_name: "Alquist", password: "youngjun", email: "toddtheman@gmail.com", birthday: Date.new(1986,3,15), gender: "Male" )
# s.save
# t = User.new(first_name: "Lydia", last_name: "Rodarte-Quayle", password: "youngjun", email: "lquayle@madrigal.com", birthday: Date.new(1970,9,28), gender: "Female" )
# t.save
# u = User.new(first_name: "Brandon", last_name: "Mayhew", password: "youngjun", email: "badger@hotmail.com", birthday: Date.new(1985,11,20), gender: "Male" )
# u.save
# v = User.new(first_name: "Peter", last_name: "Baker", password: "youngjun", email: "skinnypete@hotmail.com", birthday: Date.new(1983,2,19), gender: "Male" )
# v.save

Friend.create(receive_id: 4, request_id: 5, pending: false)
Friend.create(receive_id: 4, request_id: 8, pending: false)
Friend.create(receive_id: 4, request_id: 9, pending: false)
Friend.create(receive_id: 4, request_id: 10, pending: false)
Friend.create(receive_id: 4, request_id: 11, pending: false)
Friend.create(receive_id: 4, request_id: 12, pending: false)
Friend.create(receive_id: 4, request_id: 13, pending: false)
Friend.create(receive_id: 4, request_id: 14, pending: false)
Friend.create(receive_id: 4, request_id: 16, pending: false)
Friend.create(receive_id: 4, request_id: 17, pending: false)
Friend.create(receive_id: 5, request_id: 7, pending: false)
Friend.create(receive_id: 5, request_id: 12, pending: false)
Friend.create(receive_id: 5, request_id: 16, pending: false)
Friend.create(receive_id: 5, request_id: 21, pending: false)
Friend.create(receive_id: 6, request_id: 7, pending: false)
Friend.create(receive_id: 6, request_id: 21, pending: false)
Friend.create(receive_id: 6, request_id: 24, pending: false)
Friend.create(receive_id: 6, request_id: 25, pending: false)
Friend.create(receive_id: 6, request_id: 12, pending: false)
Friend.create(receive_id: 6, request_id: 13, pending: false)
Friend.create(receive_id: 7, request_id: 19, pending: false)
Friend.create(receive_id: 7, request_id: 20, pending: false)
Friend.create(receive_id: 7, request_id: 21, pending: false)
Friend.create(receive_id: 7, request_id: 22, pending: false)
Friend.create(receive_id: 7, request_id: 23, pending: false)
Friend.create(receive_id: 7, request_id: 24, pending: false)
Friend.create(receive_id: 7, request_id: 25, pending: false)
Friend.create(receive_id: 8, request_id: 9, pending: false)
Friend.create(receive_id: 8, request_id: 10, pending: false)
Friend.create(receive_id: 8, request_id: 11, pending: false)
Friend.create(receive_id: 8, request_id: 12, pending: false)
Friend.create(receive_id: 8, request_id: 13, pending: false)
Friend.create(receive_id: 8, request_id: 14, pending: false)
Friend.create(receive_id: 8, request_id: 20, pending: false)
Friend.create(receive_id: 9, request_id: 10, pending: false)
Friend.create(receive_id: 9, request_id: 14, pending: false)
Friend.create(receive_id: 9, request_id: 13, pending: false)
Friend.create(receive_id: 9, request_id: 17, pending: false)
Friend.create(receive_id: 10, request_id: 11, pending: false)
Friend.create(receive_id: 10, request_id: 12, pending: false)
Friend.create(receive_id: 10, request_id: 14, pending: false)
Friend.create(receive_id: 10, request_id: 17, pending: false)
Friend.create(receive_id: 11, request_id: 12, pending: false)
Friend.create(receive_id: 11, request_id: 14, pending: false)
Friend.create(receive_id: 11, request_id: 19, pending: false)
Friend.create(receive_id: 11, request_id: 20, pending: false)
Friend.create(receive_id: 11, request_id: 23, pending: false)
Friend.create(receive_id: 12, request_id: 13, pending: false)
Friend.create(receive_id: 12, request_id: 14, pending: false)
Friend.create(receive_id: 12, request_id: 19, pending: false)
Friend.create(receive_id: 13, request_id: 14, pending: false)
Friend.create(receive_id: 13, request_id: 22, pending: false)
Friend.create(receive_id: 13, request_id: 23, pending: false)
Friend.create(receive_id: 14, request_id: 18, pending: false)
Friend.create(receive_id: 14, request_id: 20, pending: false)
Friend.create(receive_id: 14, request_id: 23, pending: false)
Friend.create(receive_id: 14, request_id: 16, pending: false)
Friend.create(receive_id: 19, request_id: 20, pending: false)
Friend.create(receive_id: 19, request_id: 5, pending: false)
Friend.create(receive_id: 20, request_id: 21, pending: false)
Friend.create(receive_id: 20, request_id: 23, pending: false)
Friend.create(receive_id: 21, request_id: 22, pending: false)
Friend.create(receive_id: 21, request_id: 23, pending: false)
Friend.create(receive_id: 22, request_id: 23, pending: false)
Friend.create(receive_id: 24, request_id: 25, pending: false)
