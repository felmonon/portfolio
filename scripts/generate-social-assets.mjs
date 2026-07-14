import { readFile, writeFile } from 'node:fs/promises'
import React from 'react'
import satori from 'satori'
import sharp from 'sharp'

const serif = await readFile('/System/Library/Fonts/Supplemental/Georgia.ttf')
const serifBold = await readFile('/System/Library/Fonts/Supplemental/Georgia Bold.ttf')
const mono = await readFile('/System/Library/Fonts/Supplemental/Courier New.ttf')

const fonts = [
  { name: 'Georgia', data: serif, weight: 400, style: 'normal' },
  { name: 'Georgia', data: serifBold, weight: 700, style: 'normal' },
  { name: 'Courier New', data: mono, weight: 400, style: 'normal' },
]

const ogMarkup = React.createElement(
  'div',
  {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      padding: '66px 76px',
      background: '#f2f0e9',
      color: '#171916',
    },
  },
  React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '22px',
        borderBottom: '2px solid #a8a59c',
        color: '#225c50',
        fontFamily: 'Courier New',
        fontSize: '22px',
        letterSpacing: '3px',
        textTransform: 'uppercase',
      },
    },
    React.createElement('span', null, 'FELMON.TECH'),
    React.createElement('span', null, 'CALGARY / OPEN TO U.S. RELOCATION'),
  ),
  React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', gap: '24px' } },
    React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          fontFamily: 'Georgia',
          fontSize: '92px',
          fontWeight: 700,
          letterSpacing: '-5px',
          lineHeight: 1,
        },
      },
      'Felmon Fekadu',
    ),
    React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          maxWidth: '920px',
          color: '#4e514b',
          fontFamily: 'Georgia',
          fontSize: '38px',
          lineHeight: 1.25,
        },
      },
      'Full-stack software engineer building developer tools and applied AI products.',
    ),
  ),
  React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        gap: '30px',
        color: '#656860',
        fontFamily: 'Courier New',
        fontSize: '20px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
      },
    },
    React.createElement('span', null, 'DEVELOPER TOOLS'),
    React.createElement('span', null, '/'),
    React.createElement('span', null, 'APPLIED AI'),
    React.createElement('span', null, '/'),
    React.createElement('span', null, 'OPEN SOURCE'),
  ),
)

const ogSvg = await satori(ogMarkup, { width: 1200, height: 630, fonts })
await sharp(Buffer.from(ogSvg)).jpeg({ quality: 90, chromaSubsampling: '4:4:4' }).toFile('app/opengraph-image.jpg')

const iconMarkup = React.createElement(
  'div',
  {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      background: '#173f37',
      color: '#faf9f5',
      fontFamily: 'Georgia',
      fontSize: '62px',
      fontWeight: 700,
      letterSpacing: '-5px',
    },
  },
  'FF',
)

const iconSvg = await satori(iconMarkup, { width: 128, height: 128, fonts })
await sharp(Buffer.from(iconSvg)).png({ palette: true, compressionLevel: 9 }).toFile('app/icon.png')

await writeFile('tmp/favicon-source.svg', iconSvg)
