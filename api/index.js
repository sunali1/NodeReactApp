import express from 'express';
import data from '../src/testData.json';

const router = express.Router();

const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({
    contests: contests
  });
});

router.get('/contests/:contestId', (req, res) => {
  console.log(req.params.contestId);
  console.log(contest);
  let contest = contests[req.params.contestId];
  contest.description = 'Lorem Ipsum'; //placeholder description
  res.send(contest);
});

export default router;
