function Bugcide () {
  this.errorCount = 0;
  this.errorTimer = null;
  this.errorQueue = [];
  this.serverUrl = 'http://localhost:8080';
  this.projectToken = null;

  this.sendErrorApi = function (projectToken, errorList) {
    return fetch(`${this.serverUrl}/project/${projectToken}/error`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(errorList)
    })
      .then(res => res.json());
  };

  this.init = async function ({ projectToken }) {
    window.addEventListener('error', event => this.startTracking.call(this, event, projectToken));
    console.log('Bugcide is now tracking error!');
  };

  this.startTracking = async function (event, projectToken) {
    this.projectToken = projectToken;
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
    this.errorCount++;

    const newError = {
      name: error.name,
      message: error.message,
      stack: error.stack,
      filename,
      lineno,
      colno,
      created_at: new Date()
    };
    this.errorQueue.unshift(newError);

    const that = this;
    this.errorTimer = setTimeout(() => {
      clearTimeout(that.errorTimer);

      if (this.errorQueue.length === 0) {
        return;
      }

      let compressedList = [];
      if (this.errorQueue.length > 1) {
        let duplicateCount = 1;

        compressedList = this.errorQueue.reduce((compressed, current) => {
          const last = compressed.length - 1;
          if (compressed[last] && compressed[last].stack === current.stack) {
            duplicateCount++;
            current.duplicate_count = duplicateCount;
            compressed[last] = current;
          } else {
            duplicateCount = 1;
            current.duplicate_count = duplicateCount;
            compressed.push(current);
          }
          return compressed;
        }, []);

      } else {
        compressedList = this.errorQueue.slice();
      }

      const errorList = {
        errorInfo: compressedList
      };

      this.sendErrorApi(this.projectToken, errorList)
        .then(response => {
          if (response.result === 'unauthorized') {
            throw new Error('Project Token is invalid!');
          }

          if (response.result !== 'ok' && response.result !== 'not changed') {
            throw new Error('Something went wrong.');
          }
          console.log('Bugcide: error recorded');
        })
        .catch(err => {
          console.log('Bugcide Error: ' + err.message);
        });

      this.errorQueue.length = 0;
    }, 2000);

    if (this.errorCount % 5 === 0) {
      const randomMessage = this.getRandom(this.encouragingMessages);
      const randomImage = this.getRandom(this.encouragingImage);
      console.log(`%c${randomMessage}`, `font-size: 30px; line-height: 100px; padding-left: 160px; background:url(${randomImage}) no-repeat left center / 150px;`);
    }
  };

  this.getRandom = function (collections) {
    const index = Math.floor(Math.random() * collections.length);
    return collections[index];
  };

  this.encouragingImage = [
    'https://media.giphy.com/media/l41Yh1olOKd1Tgbw4/giphy.gif',
    'https://media.giphy.com/media/xT5LMJ1RDaVyttu3vO/giphy.gif',
    'https://media.giphy.com/media/26gskaXMHwQFmuXAc/giphy.gif',
    'https://media.giphy.com/media/3owyoYqpufITS7pPeE/giphy.gif',
    'https://media.giphy.com/media/26xBPr0aH7KoVx5L2/giphy.gif',
    'https://media.giphy.com/media/xT1XGT9ersCCKjhVny/giphy.gif',
    'https://media.giphy.com/media/xT1XH0lC7yoLLB1BSM/giphy.gif'
  ];

  this.encouragingMessages = [
    '힘내세요',
    '실패는 성공의 어머니다',
    '난 할 수 있어!',
    '이 정도 버그는 아무것도 아니지',
    '산책이라도 하고 와...',
    '포기하지마세요',
    '이것만 해결하면...!'
  ];
}

export default Bugcide;
