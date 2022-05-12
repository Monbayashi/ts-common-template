import { DateUtil } from '../date.util';

const DATE_RESULT_MS = 86400000;

it('[DateUtil.now]', () => {
  const date = DateUtil.now();
  expect(date).toBeInstanceOf(Date);
});

it('[DateUtil.tomorrow]', () => {
  const date = DateUtil.now();
  const tomorrow = DateUtil.tomorrow(date);

  const subtraction = tomorrow.getTime() - date.getTime();
  expect(subtraction).toBe(DATE_RESULT_MS);
});

it('[DateUtil.yesterday]', () => {
  const date = DateUtil.now();
  const yesterday = DateUtil.yesterday(date);

  const subtraction = date.getTime() - yesterday.getTime();
  expect(subtraction).toBe(DATE_RESULT_MS);
});
