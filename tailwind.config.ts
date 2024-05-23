import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'red': 'hsl(0, 100%, 74%)',
        'green': 'hsl(154, 59%, 51%)',
        'blue': 'hsl(248, 32%, 49%)',
        'dark-blue': 'hsl(249, 10%, 26%)',
        'grayish-blue': 'hsl(246, 25%, 77%)',
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        poppinsReg: ["Poppins", ...fontFamily.sans],
        poppinsMed: ["Poppins-Medium", ...fontFamily.sans],
        poppinsBold: ["Poppins-Bold", ...fontFamily.sans],
        poppinsExtrabold: ["Poppins-ExtraBold", ...fontFamily.sans],
        poppinsExtraLight: ["Poppins-ExtraLight", ...fontFamily.sans],
        poppinsLight: ["Poppins-Light", ...fontFamily.sans],
        poppinsSemiBold: ["Poppins-SemiBold", ...fontFamily.sans],
        poppinsBlack: ["Poppins-Black", ...fontFamily.sans],
        poppinsThin: ["Poppins-Thin", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
