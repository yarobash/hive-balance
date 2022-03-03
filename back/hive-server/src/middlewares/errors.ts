export default (err: any, req: any, res: any, next: any) => {
  const statusCode: any = err.statusCode || 500;
  const message: Object = statusCode === 500
    ? 'Внутренняя ошибка сервера'
    : err.message;
    return res.status(statusCode).send({ message });
};
