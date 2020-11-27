import { createContext } from 'react';
import EventsStore from './events.store';

export const EventsStoreContext = createContext<EventsStore>(new EventsStore());
