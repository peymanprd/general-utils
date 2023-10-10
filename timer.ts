type TimerMode = 'default' | 'reverse'

export const useTimer = (
  duration: number,
  interval: number = 1000,
  mode: TimerMode = 'default'
) => {
  function start() {
    //
  }
  function stop() {
    //
  }
  function clear() {
    //
  }

  return { start, stop, clear }
}
