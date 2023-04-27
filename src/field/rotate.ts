import type { Field } from 'payload/types'


const rotate: Field = {
  name: 'rotate',
  type: 'select',
  defaultValue: 'rotate-0',
  admin: {
    condition: (data, siblingData) => siblingData.nesecitaRotacion ? true : false,
  },
  options: [
    {
      label: '0',
      value: 'rotate-0',
    },
    {
      label: '1',
      value: 'rotate-1',
    },
    {
      label: '2',
      value: 'rotate-2',  
    },
    {
      label: '3',
      value: 'rotate-3',
    },
    {
      label: '6',
      value: 'rotate-6',
    },
    {
      label: '12',
      value: 'rotate-12',
    },
    {
      label: '45',
      value: 'rotate-45',
    },
    {
      label: '90',
      value: 'rotate-90',
    },
    {
      label: '180',
      value: 'rotate-180',
    },
    {
      label: '270',
      value: 'rotate-270',
    },
    {
      label: '360',
      value: 'rotate-360',
    },
    {
      label: '-1',
      value: '-rotate-1',
    },
    {
      label: '-2',
      value: '-rotate-2',
    },
    {
      label: '-3',
      value: '-rotate-3',

    },
    {
      label: '-6',
      value: '-rotate-6',
    },

    {
      label: '-12',
      value: '-rotate-12',
    },
    {
      label: '-45',
      value: '-rotate-45',
    },
    {
      label: '-90',
      value: '-rotate-90',
    },
    {
      label: '-180',
      value: '-rotate-180',
    },
    {
      label: '-270',
      value: '-rotate-270',
    },
    {
      label: '-360',
      value: '-rotate-360',
    },
  ]
}
export default rotate