const glob = require('glob')
const MarkdownProcessor = require('./processor')

/**
 * A helper class for reading markdown files and transpiling them
 */
class Compiler {
  /**
   * Transform and write markdown files
   */
  write(target = './compiled/guides/', source = './content/guides/') {
    glob.sync(`${source}/**/*.md`).forEach(filename => {
      new MarkdownProcessor({ 
        sourcePath: filename
       }).write({
        from: source,
        to: target
      })
    })
  }
}

// export a new loader
module.exports = new Compiler()