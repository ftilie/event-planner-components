// This is aggregated data and is not a structured database entry

export type Task = {
  description: string;
  location?: string;
  ticket?: string;
};

export type Day = {
  name: string;
  description: string;
  date: string;
  tasks: Task[];
};

export type Event = {
  title: string;
  img?: string;
  location: string;
  startDate: string;
  endDate: string;
  days?: Day[];
};

export const eventData: Event = {
  title: "Sample Event",
  // img: "sample.jpg",
  location: "Sample Location",
  startDate: "2024-01-01",
  endDate: "2024-01-02",
  days: [
    {
      name: "Day 1",
      description: "Description for Day 1",
      date: "2024-01-01",
      tasks: [
        {
          description: "Task 1",
          location: "Location 1",
          ticket: "Ticket 1",
        },
      ],
    },
  ],
};
