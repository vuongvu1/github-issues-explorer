import { timeSince } from "./time";

const testData = [
  { input: new Date("2021-05-01T11:59:30.000Z"), result: "30 seconds" },
  { input: new Date("2021-05-01T10:00:00.000Z"), result: "2 hours" },
  { input: new Date("2021-04-20T10:00:00.000Z"), result: "11 days" },
  { input: new Date("2021-02-20T10:00:00.000Z"), result: "2 months" },
  { input: new Date("2017-02-20T10:00:00.000Z"), result: "4 years" },
];

describe("timeSince", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2021-05-01T12:00:00.000Z"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test.each(testData)("should return correct result for %s", (data) => {
    expect(timeSince(data.input)).toBe(data.result);
  });
});
