export class ApiError extends Error {
  public static readonly STATUS_TEXTS: Record<number, string> = {
    200: "OK",
    201: "Created",
    400: "Bad Request",
    401: "Unauthorized",
    404: "Not Found",
    500: "Internal Server Error",
  };

  public status: number;
  public error: string;

  public constructor(message: string, status: number) {
    super(message);

    this.status = status;
    this.error = ApiError.STATUS_TEXTS[status] || "Unknown Error";
  }
}
