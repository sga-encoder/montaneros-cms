import type { Field } from 'payload/types'

const translateY: Field = {
  name: 'translateY',
  type: 'select',
  defaultValue: 'translate-y-0',
  admin: {
    condition: (data, siblingData) => siblingData.nesecitaTranslate ? true : false,
  },
  options: [
    {
      label: '0',
      value: 'translate-y-0',
    },
    {
      label: '0.5',
      value: 'translate-y-0.5',
    },
    {
      label: '1',
      value: 'translate-y-1',
    },
    {
      label: '1.5',
      value: 'translate-y-1.5',
    },
    {
      label: '2',
      value: 'translate-y-2',
    },
    {
      label: '2.5',
      value: 'translate-y-2.5',
    },
    {
      label: '3',
      value: 'translate-y-3',
    },
    {
      label: '3.5',
      value: 'translate-y-3.5',
    },
    {
      label: '4',
      value: 'translate-y-4',
    },
    {
      label: '5',
      value: 'translate-y-5',
    },
    {
      label: '6',
      value: 'translate-y-6',
    },
    {
      label: '7',
      value: 'translate-y-7',
    },
    {
      label: '8',
      value: 'translate-y-8',
    },
    {
      label: '9',
      value: 'translate-y-9',
    },
    {
      label: '10',
      value: 'translate-y-10',
    },
    {
      label: '11',
      value: 'translate-y-11',
    },
    {
      label: '12',
      value: 'translate-y-12',
    },
    {
      label: '14',
      value: 'translate-y-14',
    },
    {
      label: '16',
      value: 'translate-y-16',
    },
    {
      label: '20',
      value: 'translate-y-20',
    },
    {
      label: '24',
      value: 'translate-y-24',
    },
    {
      label: '28',
      value: 'translate-y-28',
    },
    {
      label: '32',
      value: 'translate-y-32',
    },
    {
      label: '36',
      value: 'translate-y-36',
    },
    {
      label: '40',
      value: 'translate-y-40',
    },
    {
      label: '44',
      value: 'translate-y-44',
    },
    {
      label: '48',
      value: 'translate-y-48',
    },
    {
      label: '52',
      value: 'translate-y-52',
    },
    {
      label: '56',
      value: 'translate-y-56',
    },
    {
      label: '60',
      value: 'translate-y-60',
    },
    {
      label: '64',
      value: 'translate-y-64',

    },
    {
      label: '72',
      value: 'translate-y-72',
    },
    {
      label: '80',
      value: 'translate-y-80'
    },
    {
      label: '96',
      value: 'translate-y-96',
    },
    {
      label: '1/2',
      value: 'translate-y-1/2',
    },
    {
      label: '1/3',
      value: 'translate-y-1/3',
    },
    {
      label: '2/3',
      value: 'translate-y-2/3',
    },
    {
      label: '1/4',
      value: 'translate-y-1/4',
    },
    {
      label: '2/4',
      value: 'translate-y-2/4',
    },
    {
      label: '3/4',
      value: 'translate-y-3/4',
    },
    {
      label: '100%',
      value: 'translate-y-full',
    },
    {
      label: '-0.5',
      value: '-translate-y-0.5',
    },
    {
      label: '-1',
      value: '-translate-y-1',
    },
    {
      label: '-1.5',
      value: '-translate-y-1.5',
    },
    {
      label: '-2',
      value: '-translate-y-2',
    },
    {
      label: '-2.5',
      value: '-translate-y-2.5',
    },
    {
      label: '-3',
      value: '-translate-y-3',
    },
    {
      label: '-3.5',
      value: '-translate-y-3.5',
    },
    {
      label: '-4',
      value: '-translate-y-4',
    },
    {
      label: '-5',
      value: '-translate-y-5',
    },
    {
      label: '-6',
      value: '-translate-y-6',
    },
    {
      label: '-7',
      value: '-translate-y-7',
    },
    {
      label: '-8',
      value: '-translate-y-8',
    },
    {
      label: '-9',
      value: '-translate-y-9',
    },
    {
      label: '-10',
      value: '-translate-y-10',
    },
    {
      label: '-11',
      value: '-translate-y-11',
    },
    {
      label: '-12',
      value: '-translate-y-12',
    },
    {
      label: '-14',
      value: '-translate-y-14',
    },
    {
      label: '-16',
      value: '-translate-y-16',
    },
    {
      label: '-20',
      value: '-translate-y-20',
    },
    {
      label: '-24',
      value: '-translate-y-24',
    },
    {
      label: '-28',
      value: '-translate-y-28',
    },
    {
      label: '-32',
      value: '-translate-y-32',
    },
    {
      label: '-36',
      value: '-translate-y-36',
    },
    {
      label: '-40',
      value: '-translate-y-40',
    },
    {
      label: '-44',
      value: '-translate-y-44',
    },
    {
      label: '-48',
      value: '-translate-y-48',
    },
    {
      label: '-52',
      value: '-translate-y-52',
    },
    {
      label: '-56',
      value: '-translate-y-56',
    },
    {
      label: '-60',
      value: '-translate-y-60',
    },
    {
      label: '-64',
      value: '-translate-y-64',
    },
    {
      label: '-72',
      value: '-translate-y-72',
    },
    {
      label: '-80',
      value: '-translate-y-80',
    },
    {
      label: '-96',
      value: '-translate-y-96',
    },
    {
      label: '-1/2',
      value: '-translate-y-1/2',
    },
    {
      label: '-1/3',
      value: '-translate-y-1/3',
    },
    {
      label: '-2/3',
      value: '-translate-y-2/3',
    },
    {
      label: '-1/4',
      value: '-translate-y-1/4',
    },
    {
      label: '-2/4',
      value: '-translate-y-2/4',
    },
    {
      label: '-3/4',
      value: '-translate-y-3/4',
    },
    {
      label: '-100%',
      value: '-translate-y-full',
    },
  ]
}

export default translateY