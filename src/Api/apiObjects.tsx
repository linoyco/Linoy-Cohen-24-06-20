export interface IAutocompleteOBJ {
    Version: number,
    Key: string,
    Type: string,
    Rank: number,
    LocalizedName: string,
    Country: {
        ID: string,
        LocalizedName: string
    },
    AdministrativeArea: {
        ID: string,
        LocalizedName: string
    }
};

export interface ICurrentWeatherOBJ {
    LocalObservationDateTime: string,
    EpochTime: number,
    WeatherText: string,
    WeatherIcon: number,
    HasPrecipitation: boolean,
    PrecipitationType: any,
    IsDayTime: boolean,
    Temperature: {
        Metric: {
            Value: number,
            Unit: string,
            UnitType: number
        },
        Imperial: {
            Value: number,
            Unit: string,
            UnitType: number
        }
    },
    MobileLink: string,
    Link: string
};

export interface IDailyForecastsOBJ {
    Date: string,
    EpochDate: number,
    Temperature: {
        Minimum: {
            Value: number,
            Unit: string,
            UnitType: number
        },
        Maximum: {
            Value: number,
            Unit: string,
            UnitType: number
        }
    },
    Day: {
        Icon: number,
        IconPhrase: string,
        HasPrecipitation: boolean
    },
    Night: {
        Icon: number,
        IconPhrase: string,
        HasPrecipitation: boolean
    },
    Sources: string[],
    MobileLink: string,
    Link: string
};

export interface IHeadlineOBJ {
    EffectiveDate: string,
    EffectiveEpochDate: number,
    Severity: number,
    Text: string,
    Category: string,
    EndDate: any,
    EndEpochDate: any,
    MobileLink: string,
    Link: string
};

export interface IFiveDaysWeatherOBJ {
    Headline: IHeadlineOBJ,
    DailyForecasts: Array<IDailyForecastsOBJ>
};

export interface IGeolocationKeyOBJ {
    Version: number,
    Key: string,
    Type: string,
    Rank: number,
    LocalizedName: string,
    EnglishName: string,
    PrimaryPostalCode: string,
    Region: {
        ID: string,
        LocalizedName: string,
        EnglishName: string
    },
    Country: {
        ID: string,
        LocalizedName: string,
        EnglishName: string
    },
    AdministrativeArea: {
        ID: string,
        LocalizedName: string,
        EnglishName: string,
        Level: number,
        LocalizedType: string,
        EnglishType: string,
        CountryID: string
    },
    TimeZone: {
        Code: string,
        Name: string,
        GmtOffset: number,
        IsDaylightSaving: boolean,
        NextOffsetChange: string
    },
    GeoPosition: {
        Latitude: number,
        Longitude: number,
        Elevation: {
            Metric: {
                Value: number,
                Unit: string,
                UnitType: number
            },
            Imperial: {
                Value: number,
                Unit: string,
                UnitType: number
            }
        }
    },
    IsAlias: boolean,
    SupplementalAdminAreas: [],
    DataSets: string[]
};



