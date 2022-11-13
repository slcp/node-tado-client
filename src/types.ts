export type Locale = 'en' | string

export type TimeZone = 'Europe/Paris' | string

export type Platform = 'iOS' | 'Android' | string

export type TemperatureUnit = 'CELSIUS' | string

export type Country = 'FRA' | string

export type Geolocation = { latitude: number; longitude: number }

export type Feature =
    | 'ELIGIBLE_FOR_ENERGY_CONSUMPTION'
    | 'ENERGY_CONSUMPTION'
    | 'HEATING_ROOM_DETAILS_AS_WEBVIEW'
    | 'HOME_SCREEN_AS_WEBVIEW_PROD_ANDROID'

// TODO:
export type HomePartner = any

export type HomeIncidentDetection = { supported: boolean; enabled: boolean }

export type HomeSkill = 'AUTO_ASSIST' | string

export type HomeContactDetail = {
    name: string
    email: string
    phone: string
}

export type HomeAddress = {
    addressLine1: string
    addressLine2: string
    zipCode: string
    city: string
    state: string | null
    country: Country
}

export type Home = {
    id: number
    name: string
    dateTimeZone: TimeZone
    dateCreated: string
    temperatureUnit: TemperatureUnit
    partner: HomePartner
    simpleSmartScheduleEnabled: boolean
    awayRadiusInMeters: number
    installationCompleted: boolean
    incidentDetection: HomeIncidentDetection
    skills: HomeSkill[]
    christmasModeEnabled: boolean
    showAutoAssistReminders: boolean
    contactDetails: HomeContactDetail
    address: HomeAddress
    geolocation: Geolocation
    consentGrantSkippable: boolean
    enabledFeatures: Feature[]
    isAirComfortEligible: boolean
    isBalanceAcEligible: boolean
}

export type MeHome = Pick<Home, 'id' | 'name'>

export type MobileDeviceSettingsPushNotification = {
    lowBatteryReminder: boolean
    awayModeReminder: boolean
    homeModeReminder: boolean
    openWindowReminder: boolean
    energySavingsReportReminder: boolean
    incidentDetection: boolean
}

export type MobileDeviceSettings = {
    geoTrackingEnabled: boolean
    onDemandLogRetrievalEnabled: boolean
    pushNotifications: MobileDeviceSettingsPushNotification
}

export type MobileDeviceLocationBearingFromHome = {
    degrees: number
    radians: number
}

export type MobileDeviceLocation = {
    stale: boolean
    atHome: boolean
    bearingFromHome: MobileDeviceLocationBearingFromHome
    relativeDistanceFromHomeFence: number
}

export type MobileDeviceMetadata = {
    platform: Platform
    osVersion: string
    model: string
    locale: Locale
}

export type MobileDevice = {
    name: string
    id: number
    settings: MobileDeviceSettings
    location: MobileDeviceLocation
    deviceMetadata: MobileDeviceMetadata
}

export type Me = {
    name: string
    email: string
    username: string
    id: string
    homes: MeHome[]
    locale: Locale
    mobileDevices: MobileDevice[]
}

export type WeatherSolarIntensityType = 'PERCENTAGE' | string

export type WeatherSolarIntensity = {
    type: WeatherSolarIntensityType
    percentage: number
    timestamp: string
}

export type WeatherOutsideTemperatureType = 'TEMPERATURE' | string

export type Temperature = {
    celsius: number
    fahrenheit: number
}

export type WeatherOutsideTemperature = {
    celsius: number
    fahrenheit: number
    timestamp: string
    type: WeatherOutsideTemperatureType
    precision: Temperature
}

export type WeatherStateType = 'WEATHER_STATE' | string

export type WeatherStateValue = 'CLOUDY' | string

export type WeatherState = {
    type: WeatherStateType
    value: WeatherStateValue
    timestamp: string
}

export type Weather = {
    solarIntensity: WeatherSolarIntensity
    outsideTemperature: WeatherOutsideTemperature
    weatherState: WeatherState
}

export type DeviceType = 'VA02' | 'SU02' | string

export type DeviceConnectionState = { value: boolean; timestamp: string }

export type DeviceCharacteristicsCapabilities =
    | 'RADIO_ENCRYPTION_KEY_ACCESS'
    | 'INSIDE_TEMPERATURE_MEASUREMENT'
    | 'IDENTIFY'
    | string

export type DeviceCharacteristics = {
    capabilities: DeviceCharacteristicsCapabilities[]
}

export type DeviceMountingStateValue = 'CALIBRATED' | string

export type DeviceMountingState = {
    value: DeviceMountingStateValue
    timestamp: string
}

export type DeviceBatteryState = 'NORMAL' | string

export type DeviceOrientation = 'HORIZONTAL' | 'VERTICAL'

export type Device = {
    deviceType: DeviceType
    serialNo: string
    shortSerialNo: string
    currentFwVersion: string
    connectionState: DeviceConnectionState
    characteristics: DeviceCharacteristics
    mountingState: DeviceMountingState
    mountingStateWithError: DeviceMountingStateValue
    batteryState: DeviceBatteryState
    orientation: DeviceOrientation
    childLockEnabled: boolean
}

export type UserHome = Pick<Home, 'id' | 'name'>

export type User = {
    name: string
    email: string
    username: string
    id: string
    homes: UserHome[]
    locale: Locale
    mobileDevices: MobileDevice[]
}

export type StatePresence = 'HOME' | string

export type State = { presence: StatePresence; presenceLocked: boolean }

export type ZoneType = 'HEATING' | 'AC'

export type ZoneDazzleMode = { supported: boolean; enabled: boolean }

export type ZoneOpenWindowDetection = {
    supported: boolean
    enabled: boolean
    timeoutInSeconds: number
}

export type ZoneDeviceDuty = 'ZONE_UI' | 'ZONE_LEADER' | 'ZONE_DRIVER'

export type ZoneDevice = Zone & {
    duties: ZoneDeviceDuty[]
}

export type Zone = {
    id: number
    name: string
    type: ZoneType
    dateCreated: string
    deviceTypes: DeviceType[]
    devices: ZoneDevice[]
    reportAvailable: boolean
    showScheduleSetup: boolean
    supportsDazzle: boolean
    dazzleEnabled: boolean
    dazzleMode: ZoneDazzleMode
    openWindowDetection: ZoneOpenWindowDetection
}

export type TadoMode = 'HOME'

export type Power = 'ON' | 'OFF'

export type TimeTableSettings = {
    type: ZoneType
    power: Power
    temperature: Temperature | null
}

export type ZoneStateNextScheduleChange = {
    start: string
    setting: TimeTableSettings
}

export type ZoneNextTimeBlock = { start: string }

export type ZoneLinkState = 'ONLINE'

export type ZoneLink = { state: ZoneLinkState }

export enum DataPointType {
    PERCENTAGE = 'PERCENTAGE',
    TEMPERATURE = 'TEMPERATURE',
}

export type DataPointPercentage = {
    type: DataPointType.PERCENTAGE
    timestamp: string
    percentage: number
}

export type DataPointTemperature = Temperature & {
    type: DataPointType.TEMPERATURE
    timestamp: string
    precision: Temperature
}

export type DataPoint = DataPointPercentage | DataPointTemperature

export type ZoneActivityDataPoints = {
    heatingPower: DataPoint
}

export type ZoneStateSensorDataPoints = {
    insideTemperature: DataPointTemperature
    humidity: DataPointPercentage
}

export type ZoneState = {
    tadoMode: TadoMode
    geolocationOverride: boolean | null
    geolocationOverrideDisableTime: boolean | null
    preparation: any // TODO:
    setting: TimeTableSettings
    overlayType: any // TODO:
    overlay: any // TODO:
    openWindow: any // TODO:
    nextScheduleChange: ZoneStateNextScheduleChange
    nextTimeBlock: ZoneNextTimeBlock
    link: ZoneLink
    activityDataPoints: ZoneActivityDataPoints
    sensorDataPoints: ZoneStateSensorDataPoints
}

export type StepTemperature = {
    min: number
    max: number
    step: number
}

export type ZoneCapabilitiesTemperatures = {
    celsius: StepTemperature
    fahrenheit: StepTemperature
}

export type ZoneCapabilities = {
    type: ZoneType
    temperatures: ZoneCapabilitiesTemperatures
}

export type AwayConfigurationPreheatingLevel = 'MEDIUM'

export type AwayConfiguration = {
    type: ZoneType
    preheatingLevel: AwayConfigurationPreheatingLevel
    minimumAwayTemperature: Temperature
}

export type TimeTableDayType =
    | 'MONDAY_TO_SUNDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | 'MONDAY_TO_FRIDAY'

export type TimeTable = {
    dayType: TimeTableDayType
    /** HH:mm */
    start: string
    /** HH:mm */
    end: string
    geolocationOverride: boolean
    setting: TimeTableSettings
}
