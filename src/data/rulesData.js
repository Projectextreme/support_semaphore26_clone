// Single source of truth for general festival rules.
// Event-specific rules remain in eventsData.js.
export const ruleCategories = [
  {
    id: 'eligibility',
    title: '1. Eligibility & Registration',
    icon: 'shield',
    rules: [
      'A team should consist of a maximum of 15 members.',
      'The fest is open to all MCA students.',
      'Teams must confirm their participation through semaphore2k26.in.',
      'The registration fee is ₹2,000 per team.',
      'For issues regarding payment of registration fees, contact the core committee members.',
      'Participants must produce their college ID on the fest day.',
      'Participants must bring a permission letter from their respective colleges.',
    ],
  },
  {
    id: 'reporting',
    title: '2. Reporting & Participation',
    icon: 'clock',
    rules: [
      'All participants must be present before 8:00 AM.',
      'All participants must be available on campus for both days of the event.',
      'For the Fashion Show, participants from other events may also join. Participants in IT Manager and Photography cannot join any other event.',
      'Participants must bring accessories such as pens, laptops, and chargers themselves.',
    ],
  },
  {
    id: 'conduct',
    title: '3. Conduct & Decisions',
    icon: 'alert',
    rules: [
      'The department or convenor reserves the right to take action in case of misconduct.',
      'The decisions of the judges are final and binding.',
      'The authorities may change the rules if necessary. Any changes will be notified.',
    ],
  },
  {
    id: 'championship',
    title: '4. Overall Championship & Awards',
    icon: 'award',
    rules: [
      'The overall championship will be decided based on the cumulative participation of each team across all events.',
      'A cash prize and trophy will be awarded to the overall champions and runners-up.',
    ],
  },
];
