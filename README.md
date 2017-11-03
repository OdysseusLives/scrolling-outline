# View flow

Example fullscreen scrolling webpage, using [AlvaroTrigo's PagePiling](https://github.com/alvarotrigo/pagePiling.js)

### Dependencies
- npm `brew install npm`
- grunt `brew install grunt`
- yarn `brew install yarn`

### Setup
- Dependency Management
  - Download dependencies with `yarn install`
  - Add more dependencies with `yarn add <dependency name>`
- Generate concatenated javascript
  - `yarn browserify src/js/app.js -o src/generated/bundle.js` where app.js is our app script
  - `yarn watchify src/js/app.js -o src/generated/bundle.js` watch mode for browserify builds

### Serve page
- `yarn budo src/generated/bundle.js --live` browserify development server focused on incremental
    reloading