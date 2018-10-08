<template>
  <div id="app">
    <h3>vue 国际化demo展示</h3>
    <button @click="changeLang()">切换</button>
    <p>{{$t('msg')}}</p>
    <table>
      <thead>
        <tr>
          <th>{{$t('tablecol.name')}}</th>
          <th>{{$t('tablecol.age')}}</th>
          <th>{{$t('tablecol.money')}}</th>
          <th>{{$t('tablecol.birthday')}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{$n(item.money,'currency')}}</td>
          <td>{{$d(new Date(item.date),'short')}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
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
  },
  methods: {
    changeLang() {
      const lang = this.$i18n.locale
      this.$i18n.locale = lang==='zh'?'en':'zh'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
table {
  margin: auto;
  width: 666px;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  color: #515a6e;
  font-size: 12px;
  background-color: #fff;
  box-sizing: border-box;
}
table td, table th {
  min-width: 0;
  height: 48px;
  box-sizing: border-box;
  text-align: left;
  text-overflow: ellipsis;
  vertical-align: middle;
  border-bottom: 1px solid #e8eaec;
}
table td {
  background-color: #fff;
  transition: background-color .2s ease-in-out;
}
table th {
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
  background-color: #f8f8f9;
}
</style>
