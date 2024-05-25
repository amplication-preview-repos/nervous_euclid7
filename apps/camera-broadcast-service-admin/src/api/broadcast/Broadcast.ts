export type Broadcast = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
