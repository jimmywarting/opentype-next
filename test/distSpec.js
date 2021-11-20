import assert from 'assert'

describe('opentype.js dist', function () {
  it('can work with the uncompressed distribution', function () {
    const opentype = require('../src/opentype')
    const font = opentype.loadSync('./fonts/Roboto-Black.ttf')
    assert.deepEqual(font.names.fontFamily, { en: 'Roboto Black' })
    assert.equal(font.unitsPerEm, 2048)
    assert.equal(font.glyphs.length, 1294)
  })

  it('can work with the compressed dist files', function () {
    const opentype = require('../src/opentype')
    const font = opentype.loadSync('./fonts/Roboto-Black.ttf')
    assert.deepEqual(font.names.fontFamily, { en: 'Roboto Black' })
    assert.equal(font.unitsPerEm, 2048)
    assert.equal(font.glyphs.length, 1294)
  })
})

describe('opentype.js dist on low memory mode', function () {
  it('can work with the uncompressed distribution', function () {
    const opentype = require('../src/opentype')
    const font = opentype.loadSync('./fonts/Roboto-Black.ttf', { lowMemory: true })
    assert.deepEqual(font.names.fontFamily, { en: 'Roboto Black' })
    assert.equal(font.unitsPerEm, 2048)
    assert.equal(font.glyphs.length, 0)
  })

  it('can work with the compressed dist files', function () {
    const opentype = require('../src/opentype')
    const font = opentype.loadSync('./fonts/Roboto-Black.ttf', { lowMemory: true })
    assert.deepEqual(font.names.fontFamily, { en: 'Roboto Black' })
    assert.equal(font.unitsPerEm, 2048)
    assert.equal(font.glyphs.length, 0)
  })
})
