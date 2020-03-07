export function journey () {
    return {
      // isOpen: false,
      url: 'http://localhost:8081/journey',
      type: 'get',
      data: {
        'msg': 'success',
        'code': 0,
        'data': [
            {'date':'2019.02.02','statime': '10:50','endtime': '11:00', 'staloc':'A','endloc': 'B', 'credit': 3},
            {'date':'2019.02.03','statime': '10:50','endtime': '11:00', 'staloc':'A','endloc': 'B', 'credit': 3},
            {'date':'2019.02.04','statime': '10:50','endtime': '11:00', 'staloc':'A','endloc': 'B', 'credit': 3}, 
          // 其他数据
        ]
      }
    }
  }