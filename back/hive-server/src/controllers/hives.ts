import hive from '../models/hive';
import { hiveAnswer, hivesAnswer } from '../utils/answers/hiveAnswers';

export default {
  createHive(req: any, res: any, next: any) {
    const { title, apiary, frames } = req.body;
    console.log(title, apiary, frames); 
    hive.createHive(title, apiary, frames)
      .then((hive: any) => res.send(hiveAnswer(hive)))
      .catch(next);
  },
};
