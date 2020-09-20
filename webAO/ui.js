/* eslint indent: ["error", 2] */

// import GoldenLayout from "./golden/js/goldenlayout.js";
import GoldenLayout from "golden-layout";

const config = {
  settings: {
    showPopoutIcon: false,
    showCloseIcon: false
  },
  dimensions: {
    minItemHeight: 40
  },
  content: [{
    type: "row",
    content: [{
      type: "column",
      width: 40,
      content: [{
        type: "component",
        componentName: "template",
        title: "Game",
        height: 30,
        id: "thegame",   
        componentState: { id: "client_wrapper" }
      },
      {
        type: "component",
        title: "Input",
        componentName: "template",
        componentState: { id: "iccontrols" }
      }]
    },
    {
      type: "column",
      content: [{
        type: "row",
        height: 65,
        content: [{
          type: "stack",
          content: [{
            type: "component",
            title: "Main",
            componentName: "template",
            componentState: { id: "mainmenu" }
          },
          {
            type: "component",
            title: "Log",
            componentName: "template",
            componentState: { id: "log" }
          }]
        },
        {
          type: "component",
          title: "Music",
          width: 30,
          componentName: "template",
          componentState: { id: "music" }
        }]
      },
      {
        type: "row",
        content: [{
          type: "component",
          title: "Server chat",
          componentName: "template",
          componentState: { id: "ooc" }
        }]
      }]
    }]
  }]
};

const golden = new GoldenLayout(config);
golden.registerComponent("template", function (container, componentState) {
  const template = document.querySelector(`#${componentState.id}`);
  container.getElement().html(template.content);
  // TODO: support multiple locales
  // container.setTitle(document.querySelector(`#${componentState.id} meta[name='frame-title']`).getAttribute("content"));
});

golden.init();

golden.on( 'stateChanged', function(_stack){
  const gamewindow = golden.root.getItemsById("thegame")[0].container;
  //gamewindow.setSize(gamewindow.width,gamewindow.width * 0.75);
});
