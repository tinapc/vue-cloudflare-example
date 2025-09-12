import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'

/**
 * @param {string} _url
 */
export async function render(_url: string) {
  const { app } = createApp()
  
  const ctx = {}
  const html = await renderToString(app, ctx)

  return { html }
}