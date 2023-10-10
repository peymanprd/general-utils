type TimerMode = 'default' | 'reverse'
/**
 *
 * @param duration {Number}
 * @param interval {Number}
 * @param mode {String}
 * @returns {Object} An useTimer Functions
 */
export const useTimer = (
  duration: number,
  interval: number = 1000,
  mode: TimerMode = 'default'
) => {
  //
  let timer: ReturnType<typeof setInterval>
  let timeLeft = mode === 'reverse' ? duration : 0

  function start() {
    timer = setInterval(() => {
      if (mode === 'reverse') {
        if (timeLeft > 0) timeLeft -= interval
        else clearInterval(timer)
      } else {
        if (timeLeft < duration) timeLeft += interval
        else clearInterval(timer)
      }
    }, interval)
  }

  function stop() {
    //
  }

  function reset() {
    timeLeft = mode === 'reverse' ? duration : 0
    start()
  }

  function clear() {
    clearInterval(timer)
  }

  return { start, stop, reset, clear, timeLeft }
}
