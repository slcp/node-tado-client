export declare type Platform = 'iOS' | 'Android';
export declare type TemperatureUnit = 'CELSIUS';
export declare type Feature = 'ELIGIBLE_FOR_ENERGY_CONSUMPTION' | 'ENERGY_CONSUMPTION' | 'HEATING_ROOM_DETAILS_AS_WEBVIEW' | 'HOME_SCREEN_AS_WEBVIEW_PROD_ANDROID';
export declare type FanSpeed = 'LEVEL1' | 'LEVEL2' | 'LEVEL3' | 'AUTO';
export declare type ACMode = 'COOL' | 'HEAT' | 'DRY' | 'FAN' | 'AUTO';
export declare type Termination = 'AUTO' | 'NEXT_TIME_BLOCK' | 'MANUAL';
export declare type OutdoorQualityLevel = 'EXCELLENT' | 'NONE';
export declare type WeatherStateValue = 'CLOUDY' | 'CLOUDY_PARTLY' | 'CLOUDY_MOSTLY' | 'NIGHT_CLOUDY' | 'NIGHT_CLEAR' | 'SUN' | 'SCATTERED_RAIN';
export declare type DeviceType = 'VA02' | 'SU02';
export declare type DeviceCharacteristicsCapabilities = 'RADIO_ENCRYPTION_KEY_ACCESS' | 'INSIDE_TEMPERATURE_MEASUREMENT' | 'IDENTIFY';
export declare type DeviceBatteryState = 'NORMAL' | 'LOW';
export declare type DeviceOrientation = 'HORIZONTAL' | 'VERTICAL';
export declare type IQUnit = 'm3' | 'kWh';
export declare type StatePresence = 'HOME' | 'AWAY' | 'AUTO';
export declare type ZoneType = 'HEATING' | 'AIR_CONDITIONING';
export declare type ZoneDeviceDuty = 'ZONE_UI' | 'ZONE_LEADER' | 'ZONE_DRIVER';
export declare type ZoneOverlayTerminationType = 'MANUAL' | 'TIMER';
export declare type ZoneOverlayTerminationTypeSkillBasedApp = 'MANUAL' | 'NEXT_TIME_BLOCK' | 'TIMER';
export declare enum DataPointType {
    PERCENTAGE = "PERCENTAGE",
    TEMPERATURE = "TEMPERATURE"
}
export declare type TimeTableDayType = 'MONDAY_TO_SUNDAY' | 'SATURDAY' | 'SUNDAY' | 'MONDAY_TO_FRIDAY';
export declare type AwayConfigurationPreheatingLevel = 'MEDIUM';
export declare type AirComfortFreshnessValue = 'FAIR';
export declare type TemperatureLevel = 'COLD' | 'COMFY' | 'HOT';
export declare type HumidityLevel = 'HUMID' | 'COMFY' | 'DRY';
export declare type EnergyIQConsumptionInputState = 'partial';
export declare type EnergySavingReportUnit = 'HOURS' | 'PERCENTAGE';
export declare type OutdoorPollensTypeValue = 'GRASS' | 'WEED' | 'TREE';
export declare type StripeTypeValue = 'HOME' | 'OPEN_WINDOW_DETECTED' | 'OVERLAY_ACTIVE';