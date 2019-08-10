declare namespace Express {
  export interface Request {
    account?: {
      id?: string;
      client_id?: string;
      address?: string;
      email?: string;
    };
  }
}
