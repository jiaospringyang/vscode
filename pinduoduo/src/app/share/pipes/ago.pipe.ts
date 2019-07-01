import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "appAgo" })
export class AppAgoPipe implements PipeTransform {
  transform(value: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);

      if (seconds < 30) {
        return "刚刚";
      }

      const intervals = {
        年: 3600 * 24 * 365,
        月: 3600 * 24 * 30,
        周: 3600 * 24 * 7,
        日: 3600 * 24,
        时: 3600,
        分: 60
      };

      let count = 0;
      for (const unitName in intervals) {
        if (intervals.hasOwnProperty(unitName)) {
          const unitValue = intervals[unitName];
          count = Math.floor(seconds / unitValue);
          console.log("unitName", seconds, unitValue, seconds / unitValue);

          if (count > 0) {
            return `${count} ${unitName} 前`;
          }
        }
      }

      return value;
    }
  }
}
