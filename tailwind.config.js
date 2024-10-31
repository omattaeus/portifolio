tailwind.config = {
  content: [
      './**/*.html',
      './**/*.js',
  ],
  theme: {
      extend: {
      fontFamily: {
          'inconsolata': ['Inconsolata', 'sans-serif'],
          'asap': ['Asap', 'sans-serif'],
          'maven': ['Maven Pro', 'sans-serif'],
      },
      colors: {
          'custom-red': '#E3646E',
          'custom-gray-2': '#C0C4CE',
          'custom-gray-3': '#878EA1',
          'custom-gray-4': '#E2E4E9',
          'custom-gray-4-20': 'rgba(226, 228, 233, 0.2)',
          'custom-gray-dark': '#0D0E11',
          'tech': '#292C34',
          'tech-2': '#16181D',
          'custom-purple': '#BB72E9',
      },
      lineHeight: {
          'tight-24': '24px',
          'tight-67': '67.2px',
          'tight-19': '19.6px',
          'tight-28': '28.8px',
          'tight-22': '22.4px',
      },
      },
  },
  plugins: [],
}