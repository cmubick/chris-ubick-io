export class Job {
    public companyName: string;
    public title: string;
    public start: string;
    public end: string;
    public current: boolean;
    public description: string;
    public skills: string[];

    constructor(companyName: string, title: string, start: string, end: string, current: boolean, description: string, skills: string[]) {
        this.companyName = companyName;
        this.title = title;
        this.start = start;
        this.end = end;
        this.current = current;
        this.description = description;
        this.skills = skills;
    }
}
