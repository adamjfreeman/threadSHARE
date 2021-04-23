const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Product, Category, Order, Charity } = require('../models');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        // need products: 
        // need categories:
        // need product:
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    // need to put something like orders.products
                    path: 'orders.products',
                    populate: 'category',
                });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }
            throw new AuthenticationError('Not logged in');
        }
        //need order
        // need checkout
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user};
        },
        //  need addOrder
        // need updateUser that adds products to userID
        // need updateProduct
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect username.');
            }
            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Incorrect password.');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;