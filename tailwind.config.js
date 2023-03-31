/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        progress: 'progress 2s linear infinite;',
      },
      keyframes: {
        progress: {
          '0%': { backgroundPosition: '40px 0' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
      colors: {
        primary: {
          solid: '#FF9000',
          dark: '#02233ce6',
          DEFAULT: 'rgba(255, 144, 0, 1)',
        },
        tech: {
          typeScript: '#007ACC',
          aggrid: '#22A7F0',
          tailwindCSS: '#22A7F0',
          reduxSagas: '#61DAFB',
          graphQL: '#E10098',
          scss: '#CD6799',
          styledComponents: '#DB7093',
          CSSModules: '#006699',
          postgreSQL: '#336791',
          mySQL: '#4479A1',
          mongoDB: '#13AA52',
          jquery: '#0769AD',
          bootstrap: '#7952B3',
          ajax: '#00A6FB',
          bem: '#F44336',
          tdd: '#00BFFF',
          unitTesting: '#4CAF50',
          integrationTesting: '#9C27B0',
          e2eTesting: '#FFC107',
          agile: '#FF6D00',
          git: '#F05032',
          grunt: '#DE3D3E',
          gulp: '#DB4446',
          bower: '#FFCD3E',
          webpack: '#8DD6F9',
          communication: '#1ABC9C',
          problemSolving: '#F39C12',
          timeManagement: '#2ECC71',
          adaptability: '#F1C40F',
          attentionToDetail: '#27AE60',
          leadership: '#2980B9',
          teamwork: '#9B59B6',
          positiveAttitude: '#E67E22',
          businessAcumen: '#E74C3C',
          userCentricMindset: '#3498DB',
        },
        'dark-primary-text': 'rgba(255, 144, 0, 0.9)',
      },
      fontFamily: {
        kaushan: 'Kaushan Script',
        'space-mono': 'Space Mono, monospace',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
