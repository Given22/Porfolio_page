export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },
    {
      name: 'years',
      title: 'Years',
      type: 'array',
      of: [{
        name: 'info',
        title: 'Info',
        type: 'document',
        fields: [
          {
            name: 'year',
            title: 'Year',
            type: 'number'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          }]
    }]
  }],
}
