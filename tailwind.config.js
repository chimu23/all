const plugin = require('tailwindcss/plugin')
const { orange, indigo } = require('tailwindcss/colors')
module.exports = {
  purge: {
    // enabled: true,
    content: ['./src/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: indigo['300'],
        red: {
          60: '#fef0f0',
          500: '#ee5050',
          550: '#ef4444',
          600: '#dd2b2b',
        },
        gray: {
          60: '#f4f4f5',
          200: '#e8ebf0',
          550: '#667797',
          600: '#566b96',
          650: '#4b5563',
        },
        yellow: {
          60: '#fdf6ec',
          500: '#f6a517',
          550: '#f59e0b',
          600: '#e7a747',
        },
        orange,
      },
      zIndex: {
        1: '1',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const buttons = {
        '.btn': {
          display: 'inline-block',
          padding: `${theme('spacing[2.5]')} ${theme('spacing.5')}`,
          lineHeight: 1,
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.medium'),
          borderWidth: '1px',
          borderRadius: theme('borderRadius.DEFAULT'),
          cursor: theme('cursor.pointer'),
          transitionProperty: 'background-color, border-color, color,opacity',
          transitionDuration: '120ms',
          transitionTimingFunction: 'linear',
          userSelect: 'none',
          'white-space': 'nowrap',
          '&[size="lg"]': {
            padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          },
          '&[size="md"]': {
            padding: `${theme('spacing[2.5]')} ${theme('spacing.5')}`,
          },
          '&[size="sm"]': {
            padding: `${theme('spacing.[2.5]')} ${theme('spacing.[3.5]')}`,
            fontSize: theme('fontSize.xs'),
          },
          '&[size="mini"]': {
            padding: `${theme('spacing.[1.5]')} ${theme('spacing.[3.5]')}`,
            fontSize: theme('fontSize.xs'),
          },
          '&[disable]': {
            cursor: theme('cursor[not-allowed]'),
            opacity: theme('opacity[50]'),
          },
        },
        '.btn-danger': {
          backgroundColor: theme('colors.red.600'),
          color: theme('colors.white'),
          borderColor: theme('colors.red.500'),
          '&:not([disable])&:hover': {
            backgroundColor: theme('colors.red.550'),
          },
          '&[plain]': {
            color: theme('colors.red.600'),
            backgroundColor: theme('colors.red.60'),
          },
          '&[plain]&:hover': {
            color: theme('colors.white'),
            backgroundColor: theme('colors.red.600'),
          },
        },
        '.btn-info': {
          backgroundColor: theme('colors.gray.600'),
          color: theme('colors.white'),
          borderColor: theme('colors.gray.500'),
          '&:not([disable])&:hover': {
            backgroundColor: theme('colors.gray.550'),
          },
          '&[plain]': {
            color: theme('colors.gray.600'),
            backgroundColor: theme('colors.gray.200'),
          },
          '&[plain]&:hover': {
            color: theme('colors.white'),
            backgroundColor: theme('colors.gray.500'),
            // opacity: theme('opacity.50'),
          },
        },
        '.btn-warning': {
          backgroundColor: theme('colors.yellow.600'),
          color: theme('colors.white'),
          borderColor: theme('colors.yellow.500'),
          '&:not([disable])&:hover': {
            backgroundColor: theme('colors.yellow.550'),
          },
          '&[plain]': {
            color: theme('colors.yellow.600'),
            backgroundColor: theme('colors.yellow.60'),
          },
          '&[plain]&:hover': {
            color: theme('colors.white'),
            backgroundColor: theme('colors.yellow.600'),
          },
        },
      }
      addComponents(buttons)
    }),
  ],
}
