module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["src/css"],
    }),
    require("autoprefixer"),
  ],
};
