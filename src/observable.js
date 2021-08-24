function Observer(onNext, onError, onComplete) {
  this.completed = false;
  this.next = onNext;
  this.err = (e) => {
    this.completed = true;
    onError(e);
  };
  this.complete = (value) => {
    this.completed = true;
    onComplete(value);
  };
}

function Observable(observer) {
  this.subscribe = (onNext, onError = () => {}, onComplete = () => {}) => {
    let unsubscribe = () => {
      console.log('init unsubscribe');
    };
    const complete = (value) => {
      onComplete(value);
      unsubscribe();
    };
    unsubscribe = observer(new Observer(onNext, onError, complete));

    return {
      unsubscribe,
    };
  };
}

const obs = new Observable((subscriber) => {
  subscriber.next(20);
  subscriber.next(10);
  subscriber.complete(40);
  return () => {
    console.log('clear');
  };
});

const subscription = obs.subscribe(console.log, console.error, console.log);
subscription.unsubscribe();
