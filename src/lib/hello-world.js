class Logger {
  constructor() {
    this.LCERROR = "\x1b[31m%s\x1b[0m"; //red
    this.LCWARN = "\x1b[33m%s\x1b[0m"; //yellow
    this.LCINFO = "\x1b[36m%s\x1b[0m"; //cyan
    this.LCSUCCESS = "\x1b[32m%s\x1b[0m"; //green
  }

  error(message, ...optionalParams) {
    console.error(this.LCERROR, message, ...optionalParams);
  }
  warn(message, ...optionalParams) {
    console.warn(this.LCWARN, message, ...optionalParams);
  }

  info(message, ...optionalParams) {
    console.info(this.LCINFO, message, ...optionalParams);
  }

  success(message, ...optionalParams) {
    console.info(this.LCSUCCESS, message, ...optionalParams);
  }
}

// then instead (as presented in the accepted answer)
// console.error(LCERROR, 'Error message in red.');
// you write:

module.exports = new Logger();
