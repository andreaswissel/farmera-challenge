export interface User {
    cell: string;
    dob: { date: string, age: number };
    email: string;
    gender: string;
    id: { name: string, value: string };
    location: {
        street: { number: number, name: string },
        city: string,
        state: string,
        country: string,
        postcode: number,
        coordinates: { latitude: number, longitude: number },
        timzone: { offset: string, description: string }
    };
    login: {
        uuid: string,
        username: string,
        password: string,
        md5: string,
        sha1: string,
        sha256: string
    };
    name: { title: string, first: string, last: string };
    nat: string;
    phone: string;
    picture: { large: string, medium: string, thumbnail: string };
    registered: { date: string, age: number };
    lastCheckin: number;
}
