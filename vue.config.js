const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    host: "localhost",
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_varible.scss";
          @import "@/assets/scss/_fonts.scss";
          @import "@/assets/scss/_base.scss";
          @import "@/assets/scss/_mixins.scss";
        `,
      },
    },
  },
});
