const Bugcide = {
  init: function ({ projectToken }) {
    console.log(projectToken);
    let errorCount = 0;

    window.addEventListener('error', async function (event) {
      const {
        filename,
        lineno,
        colno,
        error
      } = event;

      if (error.hasBeenCaught !== undefined) {
        return false;
      }
      error.hasBeenCaught = true;
      errorCount++;

      const errorQueue = [];
      const newError = {
        name: error.name,
        message: error.message,
        stack: error.stack,
        error_location: { filename, lineno, colno },
        created_at: new Date()
      };
      console.log(newError);
      console.log(errorCount);
    });
  }
};
