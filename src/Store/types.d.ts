declare interface Timer {
    title: string,
    currentTime: number
}

declare interface MainSlice {
    timers: Timer[] | [],
    successModal: {status: boolean, name: string}
}

declare interface State {
    main: MainSlice
}