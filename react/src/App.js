import React, { Component } from 'react';
import intl from 'react-intl-universal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          name: 'John Brown',
          age: 18,
          money: 534534545,
          date: '2016-10-3'
        },
        {
          name: 'Jim Green',
          age: 24,
          money: 34455000,
          date: '2016-10-1'
        },
        {
          name: 'Joe Black',
          age: 30,
          money: 150003443,
          date: '2016-11-2'
        },
        {
          name: 'Jon Snow',
          age: 26,
          money: 15000,
          date: '2016-6-4'
        }
      ]
    }
    this.changeLang = this.changeLang.bind(this)
  }

  changeLang() {
    const lang = intl.options.currentLocale
    intl.options.currentLocale = lang==='zh'?'en':'zh'
    this.forceUpdate()
  }

  render() {
    let list = this.state.list
    return (
      <div className="app">
        <h4>react 国际化demo展示</h4>
        <button onClick={this.changeLang}>切换</button>
        <p>{intl.get('MSG')}</p>
        <p>{intl.getHTML('B.HTML')}</p>
        <table>
          <thead>
            <tr>
              <th>{intl.get('TABLECOL.NAME')}</th>
              <th>{intl.get('TABLECOL.AGE')}</th>
              <th>{intl.get('TABLECOL.MONEY')}</th>
              <th>{intl.get('TABLECOL.BIRTHDAY')}</th>
            </tr>
          </thead>
          <tbody>
            {list.length && list.map((item,index)=>
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{intl.get('PRICE.FORMAT',{price:item.money})}</td>
                <td>{intl.get('DATE.FORMAT',{date:new Date(item.date)})}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;