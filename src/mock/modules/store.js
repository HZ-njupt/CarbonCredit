export function store () {
    return {
      // isOpen: false,
      url: 'http://localhost:8081/store',
      type: 'get',
      data: {
        'msg': 'success',
        'code': 0,
        'data': [
            {'name': '商品A','discripe': 'AAAAA', 'time':'12:00','credit': 88, 'deal': 200977, 'pic':''},
            {'name': '商品A','discripe': 'AAAAA', 'time':'12:00','credit': 8, 'deal': 200977, 'pic':''},
            {'name': '商品A','discripe': 'AAAAA', 'time':'12:00','credit': 85, 'deal': 200977, 'pic':''},
          // 其他数据
        ]
      }
    }
  }