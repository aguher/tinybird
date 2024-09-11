export const MetaFixtures = [
    {
        "name": "vendorid",
        "type": "Int16"
    },
    {
        "name": "tpep_pickup_datetime",
        "type": "DateTime"
    },
    {
        "name": "tpep_dropoff_datetime",
        "type": "DateTime"
    },
    {
        "name": "passenger_count",
        "type": "Int16"
    },
    {
        "name": "trip_distance",
        "type": "Float32"
    },
    {
        "name": "ratecodeid",
        "type": "Int16"
    },
    {
        "name": "store_and_fwd_flag",
        "type": "String"
    },
    {
        "name": "pulocationid",
        "type": "Int32"
    },
    {
        "name": "dolocationid",
        "type": "Int32"
    },
    {
        "name": "payment_type",
        "type": "Int16"
    },
    {
        "name": "fare_amount",
        "type": "String"
    },
    {
        "name": "extra",
        "type": "Float32"
    },
    {
        "name": "mta_tax",
        "type": "Float32"
    },
    {
        "name": "tip_amount",
        "type": "Float32"
    },
    {
        "name": "tolls_amount",
        "type": "Float32"
    },
    {
        "name": "improvement_surcharge",
        "type": "Float32"
    },
    {
        "name": "total_amount",
        "type": "Float32"
    }
]
export const DataFixtures = [
    {
        "vendorid": 2,
        "tpep_pickup_datetime": "2017-01-01 00:00:00",
        "tpep_dropoff_datetime": "2017-01-01 00:00:00",
        "passenger_count": 1,
        "trip_distance": 0.02,
        "ratecodeid": 2,
        "store_and_fwd_flag": "N",
        "pulocationid": 249,
        "dolocationid": 234,
        "payment_type": 2,
        "fare_amount": "52",
        "extra": 0,
        "mta_tax": 0.5,
        "tip_amount": 0,
        "tolls_amount": 0,
        "improvement_surcharge": 0.3,
        "total_amount": 52.8
    },
    {
        "vendorid": 3,
        "tpep_pickup_datetime": "2017-01-01 00:00:02",
        "tpep_dropoff_datetime": "2017-01-01 00:39:22",
        "passenger_count": 4,
        "trip_distance": 7.75,
        "ratecodeid": 1,
        "store_and_fwd_flag": "S",
        "pulocationid": 186,
        "dolocationid": 36,
        "payment_type": 1,
        "fare_amount": "22",
        "extra": 0.5,
        "mta_tax": 0.5,
        "tip_amount": 4.66,
        "tolls_amount": 0,
        "improvement_surcharge": 0.3,
        "total_amount": 27.96
    },
]