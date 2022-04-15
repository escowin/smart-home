const {User, Createproject } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const resolvers = {
  // query section
  Query: {
      projects: async (parent,{yourName}) => {
          const params = yourName? {yourName}: {}
          return Createproject.find(params)
      },
      project: async (parent, {_id}) => {
        return Createproject.findOne({_id})
      },
    loggedUser: async (parent, arags, context) => {
      if (context.user) {
        const userData = await User.findOne({
          _id: context.user._id,
        })
        .select("-__v -password")

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    // get all user
    user: async () => {
      return User.find().select("-__v -password");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
    // get all user
    users: async () => {
      return User.find().select("-__v -password");
    },
  },
  Mutation: {
    addOffer:async (parent, {projectId, newOffer}, context ) => {
      if(context.user){
        console.log(context.user)
        const offer = await Createproject.findByIdAndUpdate(
          {_id: projectId},
          {$push:{offers:{newOffer, ContractorName: context.user.name }}},
          {new:true}
        );
        return offer
      }
      console.log('error')
    },

    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return {token,user};
      },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!User) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};
module.exports = resolvers;
