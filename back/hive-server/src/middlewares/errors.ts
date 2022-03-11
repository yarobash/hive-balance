export default (err: any, req: any, res: any, next: any) => {
  console.log("Doshlo do suda");
  console.log(err);
  const statusCode: any = err.statusCode || 500;
  const message: string = statusCode === 500
    ? 'Внутренняя ошибка сервера'
    : err.message;
    return res.status(statusCode).send({ message });
};
