/*
 * @Author: renxiaofan
 * @Date: 2020-03-21 23:28:13
 * @LastEditors: renxiaofan
 * @LastEditTime: 2020-03-21 23:28:20
 * @Description:
 */
var ghpages = require("gh-pages");
ghpages.publish(
  "./docs/.vuepress/dist",
  {
    branch: "gh-pages"
  },
  function(err) {
    console.log(err);
    console.log("docs同步完成!");
  }
);
