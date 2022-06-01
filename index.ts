// public @jobs-io/types
export type Job = {
    jobSummary: JobSummary
    fullDescription: string
}

export type JobSummary = {
    source: string
    title: string
    description: string
    company: string
    datePosted: string
    location: string
};

export type Jobs = JobSummary[];

export interface JobSummarySchema {
    GetJobs(): Jobs;
}

export interface JobDetailsSchema {
    GetJob: Job;
}


export type DownloadJobsSummaryMessage = {
    url: string;
}

export type DownloadJobsDetailsMessage = {
    url: string;
    file: string;
}
