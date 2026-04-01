export interface ScheduleEvent {
  time: string;
  title: string;
  location: string;
  tag: string;
}

export interface DaySchedule {
  day: string;
  date: string;
  events: ScheduleEvent[];
}

// Legacy schedule (kept for reference)
export const legacySchedule: DaySchedule[] = [
  {
    day: 'Day 1',
    date: 'Saturday, March 21, 2026',
    events: [
      {
        time: '09:00 AM',
        title: 'Gates Open & Welcome Ceremony',
        location: 'Main Arena',
        tag: 'Opening',
      },
      {
        time: '10:00 AM',
        title: 'Traditional Drumming Workshop',
        location: 'Workshop Tent',
        tag: 'Workshop',
      },
      {
        time: '11:30 AM',
        title: 'Kandyan Dance Showcase',
        location: 'Main Stage',
        tag: 'Performance',
      },
      {
        time: '01:00 PM',
        title: 'Lunch Break & Food Festival',
        location: 'Food Court',
        tag: 'Food',
      },
      {
        time: '02:30 PM',
        title: 'Live Art Exhibition Opening',
        location: 'Art Pavilion',
        tag: 'Art',
      },
      {
        time: '04:00 PM',
        title: 'Folk Music Ensemble',
        location: 'Main Stage',
        tag: 'Music',
      },
      {
        time: '06:30 PM',
        title: 'Sunset Ceremony & Fire Dancing',
        location: 'Open Arena',
        tag: 'Performance',
      },
    ],
  },
  {
    day: 'Day 2',
    date: 'Sunday, March 22, 2026',
    events: [
      {
        time: '09:00 AM',
        title: 'Morning Yoga & Wellness Session',
        location: 'Garden Lawn',
        tag: 'Wellness',
      },
      {
        time: '10:30 AM',
        title: "Children's Cultural Programme",
        location: 'Family Zone',
        tag: 'Family',
      },
      {
        time: '12:00 PM',
        title: 'Panel: Preserving Sri Lankan Heritage',
        location: 'Conference Hall',
        tag: 'Talk',
      },
      {
        time: '01:30 PM',
        title: 'Lunch & Craft Market',
        location: 'Food Court',
        tag: 'Food',
      },
      {
        time: '03:00 PM',
        title: 'Sabaragamuwa Dance Performance',
        location: 'Main Stage',
        tag: 'Performance',
      },
      {
        time: '05:00 PM',
        title: 'Poetry & Literature Reading',
        location: 'Library Tent',
        tag: 'Literature',
      },
      {
        time: '07:00 PM',
        title: 'Grand Musical Concert',
        location: 'Main Stage',
        tag: 'Music',
      },
    ],
  },
  {
    day: 'Day 3',
    date: 'Monday, March 23, 2026',
    events: [
      {
        time: '09:00 AM',
        title: 'Cultural Procession (Perahera)',
        location: 'Main Avenue',
        tag: 'Procession',
      },
      {
        time: '11:00 AM',
        title: 'Kolam & Sokari Theatre',
        location: 'Drama Stage',
        tag: 'Theatre',
      },
      {
        time: '12:30 PM',
        title: 'Awards & Recognition Ceremony',
        location: 'Conference Hall',
        tag: 'Ceremony',
      },
      {
        time: '02:00 PM',
        title: 'Final Art Exhibition Viewing',
        location: 'Art Pavilion',
        tag: 'Art',
      },
      {
        time: '03:30 PM',
        title: 'Low Country Dance Finale',
        location: 'Main Stage',
        tag: 'Performance',
      },
      {
        time: '05:30 PM',
        title: 'Closing Concert & Fireworks',
        location: 'Main Arena',
        tag: 'Finale',
      },
    ],
  },
];

export const aprilBloomsSchedule: DaySchedule[] = [
  {
    day: 'April 1 – April 5',
    date: 'April Blooms 2026 (Part 1)',
    events: [
      {
        time: 'Apr 1',
        title: 'Special Poya Day Program',
        location: 'Sri Suwarnagiri Viharaya – Single Tree',
        tag: 'Religious',
      },
      {
        time: 'Apr 2',
        title: 'Opening Ceremony',
        location: 'Nuwara Eliya Town (In front of Victoria Park)',
        tag: 'Opening',
      },
      {
        time: 'Apr 3–5',
        title: 'Cricket Tournament “Battle of Little England” (Gamini National College vs Holy Trinity Central College)',
        location: 'Municipal Ground, Nuwara Eliya',
        tag: 'Sports',
      },
      {
        time: 'Apr 4',
        title: 'Classic Car Exhibition',
        location: 'Gregory Park (Phase 1)',
        tag: 'Exhibition',
      },
      {
        time: 'Apr 4–5',
        title: 'Magasthota Hill Climb',
        location: 'Magasthota Estate Track',
        tag: 'Motorsport',
      },
      {
        time: 'Apr 5',
        title: 'Football Tournament “Mayor\'s Cup” Grand Final',
        location: 'Municipal Ground, Nuwara Eliya',
        tag: 'Sports',
      },
      {
        time: 'Apr 5–6',
        title: 'Single Tree Hill Climb',
        location: 'Single Tree Track',
        tag: 'Motorsport',
      },
    ],
  },
  {
    day: 'April 8 – April 16',
    date: 'April Blooms 2026 (Part 2)',
    events: [
      {
        time: 'Apr 8–10',
        title: 'Flower Garden Competition',
        location: 'Nuwara Eliya',
        tag: 'Competition',
      },
      {
        time: 'Apr 11',
        title: 'Cricket Tournament “Baker\'s Cup” (Old Xaverians vs Paynters)',
        location: 'Municipal Ground, Nuwara Eliya',
        tag: 'Sports',
      },
      {
        time: 'Apr 15',
        title: 'Horse Race (Day 1)',
        location: 'Race Course, Nuwara Eliya',
        tag: 'Sports',
      },
      {
        time: 'Apr 15–16',
        title: 'Gregory Motorcross',
        location: 'Race Course Motor Cross Track',
        tag: 'Motorsport',
      },
    ],
  },
  {
    day: 'April 17 – April 30',
    date: 'April Blooms 2026 (Part 3)',
    events: [
      {
        time: 'Apr 17',
        title: 'SLHIKA 26 (Kite Festival)',
        location: 'Gregory Park (Phase 4)',
        tag: 'Festival',
      },
      {
        time: 'Apr 17–18',
        title: 'Flower Show',
        location: 'Victoria Park, Nuwara Eliya',
        tag: 'Exhibition',
      },
      {
        time: 'Apr 18',
        title: 'Cricket Tournament “Mayor\'s Cup” (Old Xaverians vs Gamini CC)',
        location: 'Municipal Ground, Nuwara Eliya',
        tag: 'Sports',
      },
      {
        time: 'Apr 20–21',
        title: '4 x 4 Mud Challenge',
        location: 'Gregory Lake Track',
        tag: 'Motorsport',
      },
      {
        time: 'Apr 20–30',
        title: 'Badminton Tournament',
        location: 'Indoor Stadium (Cinecita)',
        tag: 'Sports',
      },
      {
        time: 'Apr 25',
        title: 'Horse Race (Day 2)',
        location: 'Race Course, Nuwara Eliya',
        tag: 'Sports',
      },
      {
        time: 'Apr 26',
        title: 'Bak Maha Perehara',
        location: 'TBA',
        tag: 'Parade',
      },
    ],
  },
];

export const tagColors: Record<string, string> = {
  Opening: 'var(--color-primary)',
  Workshop: 'var(--color-accent-blue)',
  Performance: 'var(--color-secondary)',
  Food: 'var(--color-primary)',
  Art: 'var(--color-accent-blue)',
  Music: 'var(--color-accent-red)',
  Wellness: 'var(--color-secondary)',
  Family: 'var(--color-primary)',
  Talk: 'var(--color-accent-blue)',
  Literature: 'var(--color-accent-red)',
  Procession: 'var(--color-accent-red)',
  Theatre: 'var(--color-accent-blue)',
  Ceremony: 'var(--color-bg-topbar)',
  Finale: 'var(--color-accent-red)',

  Religious: 'var(--color-secondary)',
  Sports: 'var(--color-primary)',
  Exhibition: 'var(--color-accent-blue)',
  Motorsport: 'var(--color-accent-red)',
  Competition: 'var(--color-accent-blue)',
  Festival: 'var(--color-secondary)',
  Parade: 'var(--color-primary)',
};
