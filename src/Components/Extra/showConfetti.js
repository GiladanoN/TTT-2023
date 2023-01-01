import confetti from 'canvas-confetti';

export const showConfetti = (props = {}) => {
  var count = props.count || 500;
  var defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

// function confettiEx() {
//   // confetti({
//   //   particleCount: 750,
//   //   spread: 100,
//   //   decay: 0.92,
//   //   gravity: 0.9,
//   //   scalar: 1.5,
//   //   origin: {
//   //     x: 0.5,
//   //     y: 0.8
//   //   }      
//   // });
// }
