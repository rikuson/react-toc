const CONTENT = `
# Overview

The idea is that you can automatically create a customizable table of contents from your markdown text.

PRs/Issues are always welcome.

# Installation

## Install the package with npm

Run the command below.

\`\`\`bash
npm install --save react-toc
\`\`\`

## Install the package with yarn

Run the command below.

\`\`\`bash
yarn add react-toc
\`\`\`

# Usage

Import Toc from the package and pass props to it. As for now, \`markdownText\` is the only required prop.

\`\`\`jsx
import React from "react";
import Toc from "react-toc";

const Example = () => {
const yourMarkdownText = '# test \n your markdown Content # test2\n'
return <Toc markdownText={yourMarkdownText} />
};

export default Example;
\`\`\`

# Props

| Name               | Type              | Description                                                                   |
| ------------------ | ----------------- | ----------------------------------------------------------------------------- |
| \`markdownText\`       | string            | **Required** The markdown text you want to creat a TOC from.                   |
| \`titleLimit\`         | number            | The maximum length of each title in the TOC.                                  |
| \`lowestHeadingLevel\` | number            | The lowest level of headings you want to extract from the given markdownText. |
| \`className\`          | strig             | Your custom className.                                                        |
| \`type\`               | "deafult" or"raw" | The type of a TOC you want to use.                                            |

# CustomDesign

## Add a custom className

Pass \`className\` like the code below.

\`\`\`jsx
import React from "react";
import Toc from "react-toc";

const Example = () => {
const yourMarkdownText = '# test \n your markdown Content # test2\n'
return <Toc markdownText={yourMarkdownText} className={"customClassName"}/>
};

export default Example;
\`\`\`

## Style the custom class

Now you can style your custom class just like the code below.

\`\`\`css
.customClassName  {
  border: solid 1px;
}
.customClassName > li {
  padding-bottom: 10px;
}
\`\`\`
`;

export { CONTENT };
