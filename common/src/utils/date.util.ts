/**
 * 日時　Util
 */
export abstract class DateUtil {

  static now(): Date {
    return new Date();
  }

  static tomorrow(date = this.now()): Date {
    const res = new Date(date.getTime());
    res.setDate(res.getDate() + 1);
    return res;
  }

  static yesterday(date = this.now()): Date {
    const res = new Date(date.getTime());
    res.setDate(res.getDate() -1);
    return res;
  }
}