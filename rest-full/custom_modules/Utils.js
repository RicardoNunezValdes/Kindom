const fs = require('fs')

exports.isValidDate = function (date) {
    var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date)
    if (matches == null) return false
    var d = matches[2]
    var m = matches[1] - 1
    var y = matches[3]
    var composedDate = new Date(y, m, d)
    return composedDate.getDate() == d &&
            composedDate.getMonth() == m &&
            composedDate.getFullYear() == y
}

exports.writeFile = function (path, content, callback) {
	fs.writeFile(path, content, function(err) {
    	if(err)	callback(err)
    	else 	callback(null)
	})
}