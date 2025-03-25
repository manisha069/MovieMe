export type whereToWatchArray = whereToWatchData[]

export interface whereToWatchData {
  title: string
  year: string
  country: string
  options: Options
}

export interface Options {
  stream: Stream[]
  rent?: Rent[]
  buy?: Buy[]
}

export interface Stream {
  provider: string
  option: string
  pricing: string
  providerUrl: string
}

export interface Rent {
  provider: string
  option: string
  pricing: string
  providerUrl: string
}

export interface Buy {
  provider: string
  option: string
  pricing: string
  providerUrl: string
}