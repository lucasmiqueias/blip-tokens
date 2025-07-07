module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["src/css"],
      resolve: function (id, basedir) {
        if (id.startsWith("./")) {
          return require("path").resolve(basedir, id);
        }
        return id;
      },
    }),
    require("autoprefixer"),
  ],
};
