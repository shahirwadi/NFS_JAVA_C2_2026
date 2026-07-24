import { useMemo, useState } from 'react';
import Layout from './components/Layout.jsx';
import TicketFilterPanel from './components/TicketFilterPanel.jsx';
import TicketList from './components/TicketList.jsx';
import TicketDetail from './components/TicketDetail.jsx';
import { sampleTickets } from './data/sampleTickets.js';

export default function App() {
  const [selectedTicketId, setSelectedTicketId] = useState(sampleTickets[0].id);
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [priorityFilter, setPriorityFilter] = useState('ALL');

  const filteredTickets = useMemo(() => {
    const search = searchText.trim().toLowerCase();

    return sampleTickets.filter((ticket) => {
      const matchesSearch =
        ticket.title.toLowerCase().includes(search) ||
        ticket.category.toLowerCase().includes(search);
      const matchesStatus =
        statusFilter === 'ALL' || ticket.status === statusFilter;
      const matchesPriority =
        priorityFilter === 'ALL' || ticket.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [searchText, statusFilter, priorityFilter]);

  const selectedTicket =
    filteredTickets.find((ticket) => ticket.id === selectedTicketId) ??
    filteredTickets[0] ??
    null;

  return (
    <Layout>
      <TicketFilterPanel
        searchText={searchText}
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        onSearchChange={setSearchText}
        onStatusChange={setStatusFilter}
        onPriorityChange={setPriorityFilter}
      />

      <section className="workspace-grid">
        <TicketList
          tickets={filteredTickets}
          selectedTicketId={selectedTicket?.id}
          onSelectTicket={(ticket) => setSelectedTicketId(ticket.id)}
        />
        <TicketDetail ticket={selectedTicket} />
      </section>
    </Layout>
  );
}
