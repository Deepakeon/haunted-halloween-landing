export interface IContent {
  icon: string;
  title: string;
  description: string;
}

export interface ITimeline extends IContent {
  era: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ITradition extends IContent {
}

export interface IGuideLine {
  dos: IContent[];
  donts: IContent[];
}