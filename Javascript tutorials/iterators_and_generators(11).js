// Iterators(Without for or while loop) -------------------------------------------------------->

var arr = ['a', 'b', 'c', 'd'];

function iterators(anyArray) {
    var index = -1;
    return {
        next: function () {
            if (index < anyArray.length) {
                index++;
                return {
                    value: anyArray[index],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

result = iterators(arr);
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());

// Generators ----------------------------------------------------------->

function* generator(){
    var i = 0;
    while (true){
        yield i++;
    }
}

result = generator();
console.log(result.next());