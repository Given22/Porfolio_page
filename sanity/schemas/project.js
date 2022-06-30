export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url'
    },
    {
      name: 'live',
      title: 'Live',
      type: 'url'
    },
    {
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of: [{name: 'icon', type: 'string'}]
    }
  ]
}
