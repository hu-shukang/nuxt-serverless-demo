'use strict'

const { createServer, proxy } = require('aws-serverless-express')
const express = require('express')
const { Nuxt } = require('nuxt')
const config = require('./nuxt.config.js')

const app = express()
const nuxt = new Nuxt({
  ...config,
  dev: false,
  _start: true,
})

app.use(async (req, res) => {
  if (nuxt.ready) {
    await nuxt.ready()
  }
  nuxt.render(req, res)
})

const server = createServer(app, void 0, [
  'application/javascript',
  'application/json',
  'application/manifest+json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/x-icon', // for favicon
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
  'application/rss+xml',
  'application/atom+xml',
])

module.exports.handler = (event, ctx) => {
  proxy(server, event, ctx)
}
