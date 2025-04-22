const products = require("../data/products");
const Product = require("../model/Product");

const resolvers = {
  Query: {
    products: async () => await Product.find({}),
    product: async (_, { id }) => Product.findById(id),
  },

  Mutation: {
    createProduct: async (_, args) => {
      const newlyCreatedProduct = new Product(args);

      return await newlyCreatedProduct.save();
    },

    deleteProduct: async (_, { id }) => {
      const deleteProduct = await Product.findByIdAndDelete(id);

      return !!deleteProduct;
    },

    updateProduct: async (_, { id, ...updatedFields }) => {
      return await Product.findByIdAndUpdate(id, updatedFields, { new: true });
    },
  },
};

module.exports = resolvers;
