export interface Interval {
  id?: string;
  startedAt: Date;
  endedAt: Date;
}

export interface WorkRecord {
  id?: string;
  startedAt: Date;
  endedAt: Date;
  content: string;
  intervals: Interval[];
}
