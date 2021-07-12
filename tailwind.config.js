module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",  // class => brand-light
          DEFAULT: "#0fa9e6", // class => brand
          dark: "#0c87b8",  // class => brand-dark
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif", // class => font-headline
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // if you're trying something and it's not working changes 
      // you need to go and enable that variant in the config file
    },
  },
  plugins: [],
};
