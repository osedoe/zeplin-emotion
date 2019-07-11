/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */
const { parseString } = require("./utils/parseString");

function layer(context, selectedLayer) {
  // const containerType = "styleguide" in context ? "styleguide" : "project";
  // const object = {
  //     layerName: selectedLayer.name,
  //     [`${containerType}Name`]: context[containerType].name,
  //     // context: context
  // };
  //
  // const JSONString = JSON.stringify(object, null, 2);
  //
  // return {
  //     code: JSONString,
  //     language: "json"
  // };

  const {name} = selectedLayer;

  return `const ${parseString(name)} = styled.div
    fills: ${JSON.stringify(selectedLayer.fills, null, 2)}
    `;
}

function screen(context, selectedVersion, selectedScreen) {

}

function component(context, selectedVersion, selectedComponent) {
  console.log(selectedComponent);
}

function colors(context) {

}

function textStyles(context) {

}

function exportColors(context) {

}

function exportTextStyles(context) {

}

/**
 * The following functions will be deprecated. Your extensions can export them to support old versions of Zeplin's macOS app.
 * See Zeplin Extensions migration guide for details:
 * https://zpl.io/shared-styleguides-extensions-migration-guide
 */

function styleguideColors(context, colors) {

}

function styleguideTextStyles(context, textStyles) {

}

function exportStyleguideColors(context, colors) {

}

function exportStyleguideTextStyles(context, textStyles) {

}

function comment(context, text) {

}

export default {
  layer,
  screen,
  component,
  colors,
  textStyles,
  exportColors,
  exportTextStyles,
  styleguideColors,
  styleguideTextStyles,
  exportStyleguideColors,
  exportStyleguideTextStyles,
  comment
};
