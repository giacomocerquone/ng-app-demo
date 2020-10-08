import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'currConverter',
  pure: false,
})
export class CurrConverterPipe implements PipeTransform {
  private cachedMoney: string = null;
  private cachedFrom: 'USD' | 'EUR' = null;
  private cachedTo: 'USD' | 'EUR' = null;
  private cachedResult: string = '';

  constructor(private http: HttpClient) {}

  transform(value: string, ...args: Array<'USD' | 'EUR'>): string {
    console.log(value, args);
    if (
      this.cachedFrom !== args[0] ||
      this.cachedTo !== args[1] ||
      this.cachedMoney !== value
    ) {
      this.cachedFrom = args[0];
      this.cachedTo = args[1];
      this.cachedMoney = value;

      this.http
        .get(
          `https://free.currconv.com/api/v7/convert?q=${args[0]}_${args[1]}&compact=ultra&apiKey=345ee043f597cf36322b`
        )
        .subscribe((res) => {
          console.log(res);
          this.cachedResult = (
            res[`${args[0]}_${args[1]}`] * parseInt(value)
          ).toString();
        });
    }

    return this.cachedResult;
  }
}
