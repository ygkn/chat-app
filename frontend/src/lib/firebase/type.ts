export type DBMessage = {
  date: number;
  message: string;
  userId: string;
  userName: string | null;
};

export type Message = DBMessage & { key: string };
