

import React, { useState, useEffect } from 'react';
import E from 'wangeditor'

let editor:any;
interface BasicFormProps {
    id: any,
    onContentChange: any
  }
  interface State {
    showPublicUsers: Boolean,
    editor: String,
    title: String,
    content: any
  }
  class WangEditor extends React.Component<BasicFormProps, State> {

  state: State = {
      showPublicUsers: false,
      editor: "",
      title: "",
      content: ""
    };
    // static defaultProps = {  // 属性默认值
    //   id: 0
    // };
    componentDidMount() {
    // 注：class写法需要在componentDidMount 创建编辑器
    editor = new E("#div1")

    editor.config.onchange = (newHtml:any ) => {
      this.setState({
        content: newHtml
      })
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
    this.props.onContentChange(editor)
    return () => {
      // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
      editor.destroy()
    }
  }

  // 获取html方法1
  getHtml = () => {
    alert(this.state.content)
  }

  // 获取html方法2
  getHtml1 = () => {
    alert(editor.txt.html())
  }

  // 获取text
  getText = () => {
    alert(editor.txt.text())
  }

  render () {
    return (
      <div>
        <div id="div1"></div>
        {/* <button onClick={this.getHtml}>获取html</button>
        <button onClick={this.getHtml1}>获取html1</button>
        <button onClick={this.getText}>获取text</button> */}
      </div>
    );
  }
}
export default WangEditor;