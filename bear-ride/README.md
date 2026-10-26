# 小熊慢骑 / Bear Ride

A buildless Phaser 3.90 game for GitHub Pages. Open `/bear-ride/` over HTTP. No backend, install, CDN or build step is required.

- Space, Up or tap: jump. P / Escape: pause.
- Adventure: four progressively unlocked routes; rocks and gaps; stage completion.
- Scenic: freely select a landscape, collect flowers and continue across all landscapes without hazards.
- Flowers unlock the post bear (larger collection radius) and cloud bear (higher jump).
- Shield absorbs one hit; magnet attracts flowers for 8 seconds; tailwind boosts speed for 8 seconds.
- Progress is stored in this browser using `localStorage` under `bear-ride-v1`.

## Structure

`game.js` handles Phaser rendering, scenery, input and gameplay. `core.js` holds route and character configuration, save validation and overlap logic. `style.css` and `index.html` provide responsive menus and accessible controls. Add routes in `ROUTES`; adjust the configuration and scenery renderer together when introducing a new biome. Character entries use the current bear animation with different tints and abilities; replace/add sprite sheets for distinct characters later.

## Assets and attribution

The bear animation is the user-selected existing sticker, extracted into a 16-frame 4×4 PNG sprite sheet from https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/68cf70c330ed0pB3.gif . Reference page: https://www.qiubiaoqing.com/img_detail/810350118627708596.html . The sticker is third-party artwork; its original rights remain with its creator. Background scenery is drawn in code. Phaser is vendored locally, under the MIT license in `vendor/LICENSE.txt`.

This directory can be copied into any static web host. If the surrounding blog is regenerated from another source repository, preserve/copy this directory into its publish output as well.
