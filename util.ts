
const toLowerCase = (str: string): string => String(str).toLowerCase();
const toUpperCase = (str: string): string => String(str).toUpperCase();

const _add = (a = 0, b = 0) => a + b;
const _sub = (a = 0, b = 0) => a - b;
const _mul = (a = 0, b = 0) => a * b;
const _dvd = (a = 0, b = 0) => a / b;
const toNumber = (value: string) => isNaN(Number(value)) ? 0 : Number(value);
const toBigger = (value = 0) => Math.ceil(value);
const toSmaller = (value = 0) => Math.floor(value);

const add = checkOnNumberDecorator(_add);
const sub = checkOnNumberDecorator(_sub);
const mul = checkOnNumberDecorator(_mul);
const dvd = checkOnNumberDecorator(_dvd);
const toFixed  = (n, doublePartAmount = 2): number => toNumber(toNumber(n).toFixed(doublePartAmount));

const isArrowFn = (fn): boolean => (typeof fn === 'function') && /^[^{]+?=>/.test(fn.toString());
const isNull = (value: any): boolean => value === null;

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export {
  add,
  sub,
  mul,
  dvd,
  toNumber,
  toBigger,
  toSmaller,
  chainedPipe,
  toFixed,
  toLowerCase,
  toUpperCase,
  isArrowFn,
  isNull,
  pipe,
  compose,
  getRandomInt
};

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkOnNumberDecorator(wrapper) {
  return function (...args) {
    const numbered = args.map(v => toNumber(v));
    return  wrapper.apply(this, numbered)
  }
}
function chainedPipe(action, chain = [], defaultValue = 0) {
  return chain.reduce( (acc, next) => action(acc, next), defaultValue);
}

