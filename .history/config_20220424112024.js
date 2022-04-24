window.$docsify = {
  name: "<p>谷雨</p>",
  nameLink: 'https://gyblog.netlify.app',
  //repo: 'wugenqiang/NoteBook',
  themeColor: '#42b981',  // 主题颜色
  //loadSidebar: true,//_sidebar.md如果为真，则从_sidebar.md文件加载边栏，否则从指定的路径加载
  auto2top: true, //当路线改变时,滚动到屏幕的顶部
  // loadNavbar: true, //_navbar.md如果为真，则从_navbar.md文件加载navbar ，否则从指定的路径加载
  loadSidebar: true,
  loadSidebar: 'side.md',
  loadNavbar: './nav.md',

  mergeNavbar: true, //Navbar将在小屏幕上与侧边栏合并
  executeScript: true, //执行页面上的脚本。只解析第一个脚本标记（演示）。如果存在Vue，则默认开
  maxLevel: 6, //最大的内容表级别
  //subMaxLevel: 6,//在自定义边栏中添加目录（TOC)
  externalLinkTarget: '_blank', //外链打开方式：_blank表示在新标签页中打开
  coverpage: true,
  coverpage: './cover.html',
  onlyCover: true,
  topMargin: 60, //调整top
  //executeScript: true,//执行页面上的脚本，仅解析第一个脚本标签
  search: {
    paths: 'auto',
    placeholder: '🔍 搜索',
    noData: '😒 没有数据',
    // Headline depth, 1 - 6
    depth: 6,
    maxAge: 86400000, // 过期时间，单位毫秒，默认一天
  }, //添加搜索框
  // 谷歌分析 SEO
  ga: 'UA-164658031-2',

  footer: {
    copy: '<br/><span id="sitetime"></span><br/><span>Copyright &copy; 2021 - 至今</span>',
    auth: ' <a href="#" target="_blank">🏷️GitHub</a> <span> 一群人才能走的更远！</span>',
    pre: '<hr/>',
    style: 'text-align: center;',
  }, //添加页脚

  markdown: {
    renderer: {
      code: function (code, lang, base = null) {

        if (lang === "dot") {
          return (
            '<div class="viz">' + Viz(code, "SVG") + '</div>'
          );
        }

        var pdf_renderer = function (code, lang, verify) {
          function unique_id_generator() {
            function rand_gen() {
              return Math.floor((Math.random() + 1) * 65536).toString(16).substring(1);
            }
            return rand_gen() + rand_gen() + '-' + rand_gen() + '-' + rand_gen() + '-' + rand_gen() + '-' +
              rand_gen() + rand_gen() + rand_gen();
          }
          if (lang && !lang.localeCompare('pdf', 'en', {
            sensitivity: 'base'
          })) {
            if (verify) {
              return true;
            } else {
              var divId = "markdown_code_pdf_container_" + unique_id_generator().toString();
              var container_list = new Array();
              if (localStorage.getItem('pdf_container_list')) {
                container_list = JSON.parse(localStorage.getItem('pdf_container_list'));
              }
              container_list.push({
                "pdf_location": code,
                "div_id": divId
              });
              localStorage.setItem('pdf_container_list', JSON.stringify(container_list));
              return (
                '<div style="margin-top:' + PDF_MARGIN_TOP + '; margin-bottom:' + PDF_MARGIN_BOTTOM +
                ';" id="' + divId + '">' +
                '<a href="' + code + '"> Link </a> to ' + code +
                '</div>'
              );
            }
          }
          return false;
        }
        if (pdf_renderer(code, lang, true)) {
          return pdf_renderer(code, lang, false);
        }
        //return this.origin.code.apply(this, arguments);
        return (base ? base : this.origin.code.apply(this, arguments));
      }
    }
  },

}