'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Text + chalk definitions
const data = {
  name: chalk.white('Zander Martineau /'),
  handle: chalk.cyan('MrMartineau'),
  work: chalk.white('Freelance front-end developer'),
  twitter: chalk.cyan('https://twitter.com/mrmartineau'),
  github: chalk.cyan('https://github.com/mrmartineau'),
  mastodon: chalk.cyan('https://toot.cafe/@zander'),
  web: chalk.cyan('https://zander.wtf'),
  npx: chalk.white('npx mrmartineau'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelMastodon: chalk.white.bold('  Mastodon:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const mastodoning = `${data.labelMastodon}  ${data.mastodon}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + githubing + newline + mastodoning + newline + webing + newline + twittering + newline + newline + carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  borderColor: 'white'
})))
