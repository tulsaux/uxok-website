[![Netlify Status](https://api.netlify.com/api/v1/badges/96c00307-bdc5-450d-b130-1664d3763720/deploy-status)](https://app.netlify.com/sites/heuristic-payne-d123b2/deploys)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Development

### How to compile SASS

1. Make sure you have SASS installed.

        $ sass -v

If you don't, install it here: [http://sass-lang.com/install](http://sass-lang.com/install)

1. Once installed, navigate to the CSS directory in your project:

        $ cd /{project}/assets/css

1. Run the following command to compile/watch the SCSS directory for changes.

        $ sass --watch scss/style.scss:style.css

*Note that this does not live reload the project.*
