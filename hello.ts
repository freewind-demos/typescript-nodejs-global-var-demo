declare module NodeJS {
  interface Global {
    message: string
  }
}

declare let message: string;

global.message = "Hello, typescript";

console.log(message);
