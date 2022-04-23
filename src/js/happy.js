L2Dwidget.init({
  "model": {
    //jsonpath控制显示那个小萝莉模型，
    //(切换模型需要改动)
    jsonPath: "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",
    "scale": 1
  },
  "display": {
    "position": "right", //看板娘的表现位置
    "width": 100, //小萝莉的宽度
    "height": 140, //小萝莉的高度
    "hOffset": 35,
    "vOffset": -20
  },
  "mobile": {
    "show": true,
    "scale": 0.5
  },
  "react": {
    "opacityDefault": 0.7,
    "opacityOnHover": 0.2
  }
});