import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ValueSelector} from '@featuresmaterial/utils/ValueSelector';
import {BannerType} from '@appcomponents/banner/banner-type';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {

  buttonToggleValues$: Observable<ValueSelector[]> = of([
    {label: "Awful", value: 1},
    {label: "Bad", value: 2},
    {label: "Acceptable", value: 3},
    {label: "Good", value: 4},
    {label: "Amazing", value: 5},
  ]);

  checkboxesValues$: Observable<ValueSelector[]> = of([
    {label: "cherries", value: false},
    {label: "apples", value: true},
    {label: "oranges", value: true},
    {label: "peaches", value: false},
  ]);

  radioGroupValues$: Observable<ValueSelector[]> = of([
    {label: "Info", value: BannerType.INFO},
    {label: "Warning", value: BannerType.WARNING},
    {label: "Error", value: BannerType.ERROR},
    {label: "Success", value: BannerType.SUCCESS},
  ]);

}
