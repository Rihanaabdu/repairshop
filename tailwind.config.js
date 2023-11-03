/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/**/*.ejs"],
  theme: {
    extend: {
      spacing: {
        '104': '26rem',
            '108': '27rem',
            '112': '28rem',
            '116': '29rem',
            '120': '30rem',
            '124': '31rem',
            '128': '32rem',
            '132': '33rem',
            '136': '34rem',
            '140': '35rem',
            '144': '36rem',
            '148': '37rem',
            '152': '38rem',
            '156': '39rem',
            '160': '40rem',
            '164': '41rem',
            '168': '42rem',
            '172': '43rem',
            '176': '44rem',
            '180': '45rem',
            '184': '46rem',
            '188': '47rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

