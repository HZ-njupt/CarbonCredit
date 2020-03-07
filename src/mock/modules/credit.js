export function credit () {
    return {
      // isOpen: false,
      url: 'http://localhost:8081/credit',
      type: 'get',
      data: {
        'msg': 'success',
        'code': 0,
        'data': {
           'have':0,
           'had':0,
          // 其他数据
        }
      }
    }
  }