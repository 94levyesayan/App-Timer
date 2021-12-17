declare interface Timer {
    title: string,
    currentTime: number
}

declare interface MainSlice {
    timers: Timer[] | [],
}

declare interface State {
    main: MainSlice
}