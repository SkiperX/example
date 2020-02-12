module.exports = {
  modules: [
    'nuxt-pdf'
  ],
  pdf: {
    /*
   * Output folder for generated pdf.
   */
    dir: "dist",

    /*
    * Function options for page.pdf([options])
    * Read more: https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-pagepdfoptions
    */
    pdf: {
      // Change the format of the pdfs.
      format: "A4",

      printBackground: true // Include background in pdf.
    },

    /*
    * PDF Meta configuration. (inspired by vue-meta)
    */
    meta: {
      title: "Default PDF title",
      titleTemplate: "Example ─ %s",

      author: "Christian Hansen",
      subject: "Example",

      producer: "Example Inc.",

      // Control the date the file is created.
      creationDate: new Date(),

      keywords: ["pdf", "nuxt"]
    },

    /*
    * PDF generation routes. (expanding nuxt.generate)
    */
    routes: [
      {
        // PDF Filename
        filename: "super-awesome-pdf.pdf",

        // Output directory for pdf.
        // Combined with 'dir' value in options. (default 'dist')
        directory: "downloads/",

        // Route to content that should be converted into pdf.
        route: "/",

        // Override global meta with individual meta for each pdf.
        meta: {
          title: "Super Awesome PDF"
        }
      }
    ]
  },


  /*
  ** Headers of the page
  */
  head: {
    title: 'example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

