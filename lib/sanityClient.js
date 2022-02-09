import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'mm1ud4j5',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false,
  token:
    'skLORY9YrDGfagJHbQmfPnG9oCwo8Ff7hXGT4w6oKXNz9FvgtrXmxWfMDacwvoxUWiiPZ9cghUXSvcYiAxTjdVRglXMFuLqMOhcMGLhlw33CexPjKsxRMXElsRldEVXx4HMq2PqAgLwYgYRFnSpPJKlKDqFykR9N2dXLnIivrKeny19eONQc',
})
