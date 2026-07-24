import { useEffect, useMemo, useState } from 'react';
import Layout from './components/Layout.jsx';
import ApiInfoCard from './components/ApiInfoCard.jsx';
import TicketFilterPanel from './components/TicketFilterPanel.jsx';
import TicketList from './components/TicketList.jsx';
import TicketDetail from './components/TicketDetail.jsx';
import { sampleTickets } from './data/sampleTickets.js';
import { fetchApiInfo } from './services/api.js';

export default function App() {
  const [selectedTicketId, setSelectedTicketId] = useState(sampleTickets[0].id);
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [priorityFilter, setPriorityFilter] = useState('ALL');
  const [apiInfo, setApiInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    let ignore = false;

    async function loadApiInfo() {
      try {
        const data = await fetchApiInfo();

        if (!ignore) {
          setApiInfo(data);
        }
      } catch {
        if (!ignore) {
          setApiError(
            'Could not load API information. Make sure the backend is running on port 8080.'
          );
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    loadApiInfo();

    return () => {
      ignore = true;
    };
  }, []);

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
      <ApiInfoCard
        loading={isLoading}
        error={apiError}
        apiInfo={apiInfo}
      />

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
