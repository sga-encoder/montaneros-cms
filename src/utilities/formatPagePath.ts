export const formatPagePath = (
  collection: string,
  doc: any, // eslint-disable-line @typescript-eslint/no-explicit-any
): string => {
  const { id } = doc

  let prefix = ''

  if (collection) {
    switch (collection) {
      case 'pages':
        prefix = ''
        break
      case 'posts':
        prefix = '/blog'
        break
      default:
        prefix = `/${collection}`
    }
  }

  return `${prefix}/${id}`
}
