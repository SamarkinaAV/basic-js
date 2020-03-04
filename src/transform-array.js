module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error();
    };
    var trans = [];
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "--discard-next":
                i++;
                break;
            case "--discard-prev":
                if (trans.length != 0) {
                    trans.pop();
                };
                break;
            case "--double-next":
                if (i < arr.length - 1) {
                    trans.push(arr[i + 1]);
                };
                break;
            case "--double-prev":
                if (i >= 1) {
                    trans.push(arr[i - 1]);
                };
                break;
            default:
                trans.push(arr[i]);
        };
    };
    return trans;
};