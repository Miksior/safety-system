export interface SiteDetailsDto {
  systemName: string;
  numberOfActiveAlarms: number;
  lastActiveAlarmDate: Date;
  systemDetailsLink: string;
}

export interface SystemDetailsDto {
  alarmDate: Date;
  isActive: boolean;
}

export interface SiteDto {
  siteName: string;
  numberOfUsers: number;
  numberOfActiveAlarms: number;
  systemDetailsLink: string;
}
