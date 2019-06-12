module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/Web-Portfolio/'
    : '/',
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/global_style/_variables.scss";`
        }
      }
    }
  };
