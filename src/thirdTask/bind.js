// use Node.js to run it
// Example
const person = {
    name: 'Eugene'
}

function info(phone, email) {
    console.log(`Name is: ${this.name}, Tel: ${phone}, Email: ${email}`)
}

function bind(fn, context, ...rest) {
    return function (...args) {
        const uniqId = Date.now().toString();
        context[uniqId] = fn;
        const result = context[uniqId](...rest.concat(args));
        delete context[uniqId];
        return result;

    }
}

bind(info, person)(1, 2);
bind(info, person, 3)(2);
bind(info, person, 23, 4)();

// Task

const myBind = function (thisArg, target, arg1, arg2, arg3) {
    return function (message) {
        let key = target.name;
        thisArg[key](arg1, arg2, message);
    }
};

const user = 'admin:';
const log = {
    error: myBind(console, console.log, '[Error]', user),
    warning: myBind(console, console.log, '[Warning]', user),
};

log.error('File not found!'); // [Error] admin: File not found!
log.warning('No timezone set!'); // [Warning] admin: No timezone set!

