import { useState } from 'react';

const initialFormValues = {
  title: '',
  description: '',
  category: '',
  priority: 'MEDIUM',
  status: 'OPEN'
};

export default function TicketFormWizard() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [submitted, setSubmitted] = useState(false);

  function updateField(fieldName, value) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value
    }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="card ticket-form" onSubmit={handleSubmit}>
      <div className="section-heading">
        <p className="eyebrow">Day 13 controlled form</p>
        <h2>Create Support Ticket</h2>
        <p>Enter the ticket details below.</p>
      </div>

      <div className="form-grid">
        <label htmlFor="ticket-title">
          Title
          <input
            id="ticket-title"
            name="title"
            value={formValues.title}
            onChange={(event) => updateField('title', event.target.value)}
            required
          />
        </label>

        <label htmlFor="ticket-category">
          Category
          <input
            id="ticket-category"
            name="category"
            value={formValues.category}
            onChange={(event) => updateField('category', event.target.value)}
            required
          />
        </label>

        <label htmlFor="ticket-description" className="form-grid-full">
          Description
          <textarea
            id="ticket-description"
            name="description"
            rows="6"
            value={formValues.description}
            onChange={(event) => updateField('description', event.target.value)}
            required
          />
        </label>

        <label htmlFor="ticket-priority">
          Priority
          <select
            id="ticket-priority"
            name="priority"
            value={formValues.priority}
            onChange={(event) => updateField('priority', event.target.value)}
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </label>

        <label htmlFor="ticket-status">
          Status
          <select
            id="ticket-status"
            name="status"
            value={formValues.status}
            onChange={(event) => updateField('status', event.target.value)}
          >
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In progress</option>
            <option value="CLOSED">Closed</option>
          </select>
        </label>
      </div>

      <div className="form-actions">
        <button className="button-link" type="submit">
          Review Ticket
        </button>
      </div>

      {submitted && (
        <p className="message success-message">
          Ticket form values are stored in React state and ready for the next exercise.
        </p>
      )}
    </form>
  );
}
