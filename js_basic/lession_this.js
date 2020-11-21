const foo = () => {
  var arr = []
  var i

  for (i = 0; i < 10; i++) {
      arr[i] = function () {
          console.log(i)
      }
  }

  return arr[0]
}

foo()()
