const app = getApp();

Page({
  data: {
    searchInput:'',
    fromType:''
  },
  onLoad(e) {
    this.setData({
      fromType:e.type
    })
  },
  onTodoChanged(e) {
    const checkedTodos = e.detail.value;
    app.todos = app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    }));
    this.setData({ todos: app.todos });
  },
  selectAddress() {
    const setVal = {
      to:'toAddress',
      from:'fromAddress'
    }
    my.setStorage({
      key: setVal[this.data.fromType],
      data: this.data.searchInput,
      success: function() {
        my.alert({content: '写入成功'});
      }
    });
    my.navigateBack({
      
    });
  },
  searchAddress(e){
    console.log(e)
    this.setData({
      searchInput : e.detail.value
    })
    console.log(this.data.searchInput)
  }
});
