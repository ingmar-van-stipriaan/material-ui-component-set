(() => ({
  name: 'Expansion Panel',
  icon: 'AccordionItemIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'ExpansionPanel',
      options: [
        {
          key: 'title',
          label: 'Title',
          value: ['Title'],
          type: 'VARIABLE',
        },
        {
          key: 'defaultExpanded',
          label: 'Default expanded',
          value: true,
          type: 'TOGGLE',
        },
        {
          key: 'square',
          label: 'Square',
          value: false,
          type: 'TOGGLE',
        },
        {
          key: 'variant',
          label: 'Variant',
          value: 'elevation',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Flat', value: 'flat' },
              { name: 'Outlined', value: 'outlined' },
              { name: 'Elevation', value: 'elevation' },
            ],
          },
        },
        {
          key: 'elevation',
          label: 'Elevation',
          value: '1',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: '1', value: '1' },
              { name: '2', value: '2' },
              { name: '3', value: '3' },
              { name: '4', value: '4' },
              { name: '5', value: '5' },
              { name: '6', value: '6' },
              { name: '7', value: '7' },
              { name: '8', value: '8' },
              { name: '9', value: '9' },
              { name: '10', value: '10' },
              { name: '11', value: '11' },
              { name: '12', value: '12' },
              { name: '13', value: '13' },
              { name: '14', value: '14' },
              { name: '15', value: '15' },
              { name: '16', value: '16' },
              { name: '17', value: '17' },
              { name: '18', value: '18' },
              { name: '19', value: '19' },
              { name: '20', value: '20' },
              { name: '21', value: '21' },
              { name: '22', value: '22' },
              { name: '23', value: '23' },
              { name: '24', value: '24' },
            ],
            condition: {
              type: 'SHOW',
              option: 'variant',
              comparator: 'EQ',
              value: 'elevation',
            },
          },
        },
        {
          value: ['0rem', '0rem', '0rem', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
        {
          value: ['M', 'M', 'M', 'M'],
          label: 'Inner space',
          key: 'innerSpacing',
          type: 'SIZES',
        },
      ],
      descendants: [],
    },
  ],
}))();
