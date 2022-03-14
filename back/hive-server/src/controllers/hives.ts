import hive from '../models/hive';
import { hiveAnswer, hivesAnswer } from '../utils/answers/hiveAnswers';

export default {
  createHive(req: any, res: any, next: any) {
    const owner = req.user._id;
    const { title, apiary, frames } = req.body;
    console.log(title, apiary, frames); 
    hive.createHive(title, apiary, owner, frames)
      .then((hive: any) => res.send(hiveAnswer(hive)))
      .catch(next);
  },
};
