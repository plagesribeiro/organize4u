import { peristedWritable } from '$stores/persistedWritable'

export const theme = peristedWritable('theme', 'light')

export const switchTheme = () => theme.update((t) => (t === 'dark' ? 'light' : 'dark'))
