import type { Field } from 'payload/types'


const translateX: Field = {
  name: 'translateX',
  type: 'select',
  defaultValue: 'translate-x-0',
  admin: {
    condition: (data, siblingData) => siblingData.nesecitaTranslate ? true : false,
  },
  options: [
    {
      label: '0',
      value: 'translate-x-0',
    },
    {
      label: '0.5',
      value: 'translate-x-0.5',
    },
    {
      label: '1',
      value: 'translate-x-1',
    },
    {
      label: '1.5',
      value: 'translate-x-1.5',
    },
    {
      label: '2',
      value: 'translate-x-2',
    },
    {
      label: '2.5',
      value: 'translate-x-2.5',
    },
    {
      label: '3',
      value: 'translate-x-3',
    },
    {
      label: '3.5',
      value: 'translate-x-3.5',
    },
    {
      label: '4',
      value: 'translate-x-4',
    },
    {
      label: '5',
      value: 'translate-x-5',
    },
    {
      label: '6',
      value: 'translate-x-6',
    },
    {
      label: '7',
      value: 'translate-x-7',
    },
    {
      label: '8',
      value: 'translate-x-8',
    },
    {
      label: '9',
      value: 'translate-x-9',
    },
    {
      label: '10',
      value: 'translate-x-10',
    },
    {
      label: '11',
      value: 'translate-x-11',
    },
    {
      label: '12',
      value: 'translate-x-12',
    },
    {
      label: '14',
      value: 'translate-x-14',
    },
    {
      label: '16',
      value: 'translate-x-16',
    },
    {
      label: '20',
      value: 'translate-x-20',
    },
    {
      label: '24',
      value: 'translate-x-24',
    },
    {
      label: '28',
      value: 'translate-x-28',
    },
    {
      label: '32',
      value: 'translate-x-32',
    },
    {
      label: '36',
      value: 'translate-x-36',
    },
    {
      label: '40',
      value: 'translate-x-40',
    },
    {
      label: '44',
      value: 'translate-x-44',
    },
    {
      label: '48',
      value: 'translate-x-48',
    },
    {
      label: '52',
      value: 'translate-x-52',
    },
    {
      label: '56',
      value: 'translate-x-56',
    },
    {
      label: '60',
      value: 'translate-x-60',
    },
    {
      label: '64',
      value: 'translate-x-64',
    },
    {
      label: '72',
      value: 'translate-x-72',
    },
    {
      label: '80',
      value: 'translate-x-80'
    },
    {
      label: '96',
      value: 'translate-x-96',
    },
    {
      label: '1/2',
      value: 'translate-x-1/2',
    },
    {
      label: '1/3',
      value: 'translate-x-1/3',
    },
    {
      label: '2/3',
      value: 'translate-x-2/3',
    },
    {
      label: '1/4',
      value: 'translate-x-1/4',
    },
    {
      label: '2/4',
      value: 'translate-x-2/4',
    },
    {
      label: '3/4',
      value: 'translate-x-3/4',
    },
    {
      label: '100%',
      value: 'translate-x-full',
    },
    {
      label: '-0.5',
      value: '-translate-x-0.5',
    },
    {
      label: '-1',
      value: '-translate-x-1',
    },
    {
      label: '-1.5',
      value: '-translate-x-1.5',
    },
    {
      label: '-2',
      value: '-translate-x-2',
    },
    {
      label: '-2.5',
      value: '-translate-x-2.5',
    },
    {
      label: '-3',
      value: '-translate-x-3',
    },
    {
      label: '-3.5',
      value: '-translate-x-3.5',
    },
    {
      label: '-4',
      value: '-translate-x-4',
    },
    {
      label: '-5',
      value: '-translate-x-5',
    },
    {
      label: '-6',
      value: '-translate-x-6',
    },
    {
      label: '-7',
      value: '-translate-x-7',
    },
    {
      label: '-8',
      value: '-translate-x-8',
    },
    {
      label: '-9',
      value: '-translate-x-9',
    },
    {
      label: '-10',
      value: '-translate-x-10',
    },
    {
      label: '-11',
      value: '-translate-x-11',
    },
    {
      label: '-12',
      value: '-translate-x-12',
    },
    {
      label: '-14',
      value: '-translate-x-14',
    },
    {
      label: '-16',
      value: '-translate-x-16',
    },
    {
      label: '-20',
      value: '-translate-x-20',
    },
    {
      label: '-24',
      value: '-translate-x-24',
    },
    {
      label: '-28',
      value: '-translate-x-28',
    },
    {
      label: '-32',
      value: '-translate-x-32',
    },
    {
      label: '-36',
      value: '-translate-x-36',
    },
    {
      label: '-40',
      value: '-translate-x-40',
    },
    {
      label: '-44',
      value: '-translate-x-44',
    },
    {
      label: '-48',
      value: '-translate-x-48',
    },
    {
      label: '-52',
      value: '-translate-x-52',
    },
    {
      label: '-56',
      value: '-translate-x-56',
    },
    {
      label: '-60',
      value: '-translate-x-60',
    },
    {
      label: '-64',
      value: '-translate-x-64',
    },
    {
      label: '-72',
      value: '-translate-x-72',
    },
    {
      label: '-80',
      value: '-translate-x-80',
    },
    {
      label: '-96',
      value: '-translate-x-96',
    },
    {
      label: '-1/2',
      value: '-translate-x-1/2',
    },
    {
      label: '-1/3',
      value: '-translate-x-1/3',
    },
    {
      label: '-2/3',
      value: '-translate-x-2/3',
    },
    {
      label: '-1/4',
      value: '-translate-x-1/4',
    },
    {
      label: '-2/4',
      value: '-translate-x-2/4',
    },
    {
      label: '-3/4',
      value: '-translate-x-3/4',
    },
    {
      label: '-100%',
      value: '-translate-x-full',
    },
  ]
}

export default translateX;