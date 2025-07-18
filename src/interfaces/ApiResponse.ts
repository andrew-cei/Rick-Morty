export interface APIResponse {
    id:       number;
    name:     string;
    status:   Status;
    species:  string;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export const Gender = {
    Female: "Female",
    Male: "Male",
    Unknown: "unknown",
}

type Gender = keyof typeof Gender

export interface Location {
    name: string;
    url:  string;
}

export const Status = {
    Alive: "Alive",
    Dead: "Dead",
    Unknown: "unknown",
} as const;

type Status = keyof typeof Status