// import React, { Component } from 'react';
// import './index.css';
// var E = require('wangeditor')
// class wangEditor extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             markDownId: ''
//         }
//     }
//     componentWillMount() {
//         this.setState({
//             markDownId: this.props.id
//         })
//     }
//     componentDidMount() {
//         let editor = new E(`${this.state.markDownId}`)
//             //上传图片事件
//         editor.config.uploadImgUrl = '/api/common/upload/picture';
//         editor.config.uploadImgFileName = 'file'
//         editor.config.uploadImgFns.onload = function(resultText, xhr) {

//                 var JSONresultText = JSON.parse(resultText).data
//                 var originalUrl = '<img src="' + JSONresultText + '"' + ' style="max-width:100%;"/>'
//                 this.command(null, 'insertHtml', originalUrl)

//             }
//             // 自定义timeout事件
//         editor.config.uploadImgFns.ontimeout = function(xhr) {
//             alert('上传超时');
//         };

//         // 自定义error事件
//         editor.config.uploadImgFns.onerror = function(xhr) {
//             alert('上传错误');
//         };




//         // 隐藏掉插入网络图片功能
//         editor.config.hideLinkImg = true;
//         //菜单栏
//         editor.config.menus = [
//             'source',
//             '|',
//             'bold',
//             'underline',
//             'italic',
//             'strikethrough',
//             'eraser',
//             'forecolor',
//             'bgcolor',
//             '|',
//             'quote',
//             'fontfamily',
//             'fontsize',
//             'head',
//             'unorderlist',
//             'orderlist',
//             'alignleft',
//             'aligncenter',
//             'alignright',
//             '|',
//             'link',
//             'unlink',
//             'table',
//             'emotion',
//             '|',
//             'img',
//             'video',
//             'insertcode',
//             '|',
//             'undo',
//             'redo',
//             'fullscreen'
//         ];
//         // 字体
//         editor.config.familys = [
//             '宋体', 'Arial', 'Verdana', 'Georgia'
//         ];
//         // 字号
//         editor.config.fontsizes = {
//             1: '10px',
//             2: '13px',
//             3: '16px',
//             4: '19px',
//             5: '22px',
//             6: '25px',
//             7: '28px'
//         };

//         //层级
//         editor.config.zIndex = 1

//         editor.create()
//         this.props.onContentChange(editor, this.state.markDownId)

//     }

//     render() {
//         return (<div id = { this.props.id }> </div>)
//     }
// }
// export default wangEditor;

import React, { useState, useEffect } from 'react';
import E from 'wangeditor'

let editor:any;

function WangEditor() {

  const [content, setContent] = useState('')

  useEffect(() => {
    // 注：class写法需要在componentDidMount 创建编辑器
    editor = new E("#div1")

    editor.config.onchange = (newHtml:any ) => {
      setContent(newHtml)
    }
    editor.config.hideLinkImg = true;
        //菜单栏
        // editor.config.menus = [
        //     'source',
        //     '|',
        //     'bold',
        //     'underline',
        //     'italic',
        //     'strikethrough',
        //     'eraser',
        //     'forecolor',
        //     'bgcolor',
        //     '|',
        //     'quote',
        //     'fontfamily',
        //     'fontsize',
        //     'head',
        //     'unorderlist',
        //     'orderlist',
        //     'alignleft',
        //     'aligncenter',
        //     'alignright',
        //     '|',
        //     'link',
        //     'unlink',
        //     'table',
        //     'emotion',
        //     '|',
        //     'img',
        //     'video',
        //     'insertcode',
        //     '|',
        //     'undo',
        //     'redo',
        //     'fullscreen'
        // ];
        // 字体
        editor.config.familys = [
            '宋体', 'Arial', 'Verdana', 'Georgia'
        ];
        // 字号
        editor.config.fontsizes = {
            1: '10px',
            2: '13px',
            3: '16px',
            4: '19px',
            5: '22px',
            6: '25px',
            7: '28px'
        };

        //层级
        editor.config.zIndex = 1
    /**一定要创建 */
    editor.create()

    return () => {
      // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
      editor.destroy()
    }
  }, [])

  // 获取html方法1
  function getHtml() {
    alert(content)
  }

  // 获取html方法2
  function getHtml1() {
    alert(editor.txt.html())
  }

  // 获取text
  function getText() {
    alert(editor.txt.text())
  }

  return (
    <div>
      <div id="div1"></div>

      <button onClick={getHtml}>获取html</button>
      <button onClick={getHtml1}>获取html1</button>
      <button onClick={getText}>获取text</button>
    </div>
  );
}

export default WangEditor;