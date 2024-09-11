const API_URL = 'https://api.tinybird.co/v0/pipes/yellow_tripdata_2017_pipe.json?token=p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c';

export async function fetchData(limit = 20, page = 0) {
    try {
        const parsedURL = `${API_URL}&q=SELECT * FROM _ LIMIT ${limit} OFFSET ${page}`
        const response = await fetch(parsedURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data", error);
    }
}