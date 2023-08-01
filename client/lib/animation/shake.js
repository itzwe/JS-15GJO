/* global gsap */

export function shakeForm() {
  gsap.to('form', {
    duration: 0.1,
    x: -8,
    repeat: 5,
    yoyo: true,
    clearProps: 'x',
    paused: true
  });
}
