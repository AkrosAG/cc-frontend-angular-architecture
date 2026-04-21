import {BannerType} from '@appcomponents/banner/banner-type';

export interface ValueSelector {
  label: string;
  value: boolean | number | BannerType;
}
