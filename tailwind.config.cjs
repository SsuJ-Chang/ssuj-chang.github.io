/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#f8f9fa'
			},
			fontFamily: {
				body: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			},
			typography: (theme) => ({
        DEFAULT: {
          css: {
						code: {
              backgroundColor: theme('colors.green.900 / 0.4'),  // 程式碼背景色
              padding: '0.2rem 0.4rem',                  // 程式碼內距
              borderRadius: '0.25rem',                   // 圓角效果
              fontFamily: theme('fontFamily.mono'),      // 使用等寬字體
              fontSize: '1.2rem',                      // 程式碼字體大小
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
      }),
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
