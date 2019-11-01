const Bugcide = {
  errorCount: 0,
  isReadyToSendError: false,
  errorTimer: null,
  errorQueue: [],
  init: function ({ projectToken }) {
    console.log(projectToken);

    // if projectToken is valid
    window.addEventListener('error', this.startTracking.bind(this));
  },
  startTracking: async function (event) {
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
      error_location: { filename, lineno, colno },
      created_at: new Date()
    };

    const that = this;
    this.errorTimer = setTimeout(() => {
      clearTimeout(that.errorTimer);
      that.isReadyToSendError = true;
    }, 2000);

    if (this.isReadyToSendError) {
      // send request to server
      console.log('-----', this.errorQueue);
      this.errorQueue.forEach((er) => console.log(er.name));

      this.errorQueue.length = 0;
      this.isReadyToSendError = false;
    }

    this.errorQueue.push(newError);

    console.log('isReadyToSendError: ', this.isReadyToSendError);

    if (this.errorCount % 5 === 0) {
      const randomMessage = this.getRandom(this.encouragingMessages);
      const randomImage = this.getRandom(this.encouragingImage);
      console.log(`%c${randomMessage}`, `font-size: 30px; line-height: 100px; padding-left: 160px; background:url(${randomImage}) no-repeat left center / 150px;`);
    }
  },
  getRandom: function (collections) {
    const index = Math.floor(Math.random() * collections.length);
    return collections[index];
  },
  encouragingImage: [
    'https://media.giphy.com/media/l41Yh1olOKd1Tgbw4/giphy.gif',
    'https://media.giphy.com/media/xT5LMJ1RDaVyttu3vO/giphy.gif',
    'https://media.giphy.com/media/26gskaXMHwQFmuXAc/giphy.gif',
    'https://media.giphy.com/media/3owyoYqpufITS7pPeE/giphy.gif',
    'https://media.giphy.com/media/26xBPr0aH7KoVx5L2/giphy.gif',
    'https://media.giphy.com/media/xT1XGT9ersCCKjhVny/giphy.gif',
    'https://media.giphy.com/media/xT1XH0lC7yoLLB1BSM/giphy.gif'
  ],
  encouragingMessages: [
    '힘내세요',
    '실패는 성공의 어머니다',
    '난 할 수 있어!',
    '이 정도 버그는 아무것도 아니지',
    '산책이라도 하고 와...',
    '포기하지마세요',
    '이것만 해결하면...!'
  ]
};
