import { EventSection } from '../components/EventSection';
import { eventsData } from '../data/eventsData';
import { ruleCategories } from '../data/rulesData';
import { venueTimings } from '../data/Venue_Timings';

const eventLogos = {
  'Code Wave': '/Events_LOGO/codewave.png',
  'Coral Canvas': '/Events_LOGO/coral_canvas.png',
  'Aqua Byte': '/Events_LOGO/aquabyte.png',
  'Abyss Arena': '/Events_LOGO/abyss_arena.png',
  AquaVerse: '/Events_LOGO/aquaverse.png',
  'Ocean Enigma': '/Events_LOGO/ocean_enigma.png',
  Leviathan: '/Events_LOGO/leviathan.png',
  'The Meg Pitch': '/Events_LOGO/mega_pitch.png',
  Submarine: '/Events_LOGO/submarine.png',
  Narcissa: '/Events_LOGO/tide_tailor.png',
};

function parseHead(head, role) {
  if (!head) return undefined;
  const match = head.match(/^(.*?)\s*-\s*(\d+)$/);
  const name = match?.[1]?.trim() || head;
  const phone = match?.[2] || '';
  return { name, role, phone: phone ? `+91 ${phone}` : '', whatsapp: phone ? `91${phone}` : '' };
}

const generalGuidelines = {
  id: 'general-rules',
  name: 'General Guidelines',
  category: 'Fest Rules',
  description: 'Please read the general guidelines and rules for participation in Semaphore 2K26.',
  imageUrl: '/Events_LOGO/sempahore_logo.png',
  rules: ruleCategories.flatMap((category) => category.rules),
  heads: [],
  participants: 0,
};

const scheduleNameByCategory = {
  StartUp: 'Start Up',
  'Fashin Show': 'Fashion Show',
};

function getEventSchedule(category) {
  const scheduleName = scheduleNameByCategory[category] || category;

  return Object.entries(venueTimings.events).map(([dayId, sessions], index) => ({
    dayId,
    day: `Day ${index + 1}`,
    date: venueTimings.metadata.dayLabels[dayId],
    sessions: sessions.filter((session) => session.name === scheduleName),
  })).filter((day) => day.sessions.length > 0);
}

const events = eventsData.map((event) => ({
  ...event,
  schedule: getEventSchedule(event.category),
  imageUrl: eventLogos[event.name],
  headDetails: parseHead(event.heads?.[0], 'Event Head'),
  coHeadDetails: parseHead(event.heads?.[1], 'Co-head'),
}));

export default function EventsPage() {
  return <EventSection events={events} guidelines={generalGuidelines} />;
}
